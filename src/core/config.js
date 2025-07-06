export default {
	data: {
		// the language used in the invitation
		// For this template supports 2 languages, Indonesian and English
		// for Indonesian enter "id", and for English enter "en"
		lang: "en",

		// the identity of the bride and groom who will get married
		bridAndGroom: {
			// the identity of the bridegroom
			him: {
				fullName: "Little Ghost",
				name: "Ghost",
				description: "",
				address: "",
				mother: "",
				ayah: "",
			},

			// the identity of the bride
			her: {
				fullName: "Dandelion",
				name: "Dandelion",
				description: "",
				address: "",
				mother: "",
				father: "",
			},

			// the joint name of the bride and groom
			// This paper will be in navigation section, it is recommended to use a short word
			// Examples of Mr. Honda and Mrs. Netty, become "honey"
			// In navigation, it will be written 'Honey Wedding'
			couple: "", // default 'my wedding'
		},

		// marriage time
		weddingTime: {
			// For numbers less than 10 don't have to add 0 numbers in front
			date: 0, // default 5
			month: 0, // default next month, Enter the number 1-12
			year: 0, // default now, Enter 4 digits, example 2050
			hour: 0, // default at 10am, use a time format 24 hours a day, Enter 1-24
			minute: 0, // default 10th minute, enter the number 00-59
		},

		// wedding venue
		weddingVenue: {
			shortAddress: "Gunungkidul, Yogyakarta",
		},
	},
};
