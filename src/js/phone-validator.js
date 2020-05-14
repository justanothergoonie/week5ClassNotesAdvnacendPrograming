class PhoneValidator extends Validator {
	constructor(parameters) {
		super(parameters);
		console.log('PhoneValidator()', this.options);

		console.log(
			'looking for non-american phones?',
			this.options.nonAmerican
		);
	}

	validate(event) {
		super.validateBefore(event);
		console.log('running validation for PhoneValidator', event);

		const value = event.target.value;
		console.log('value', value);
		if (/\d{3}.*\d{3}.*\d{4}/.test(value)) {
			console.log('valid phone number!');
		} else {
			console.log('not a valid phone number');
		}
		super.validateAfter(event);
	}
}
