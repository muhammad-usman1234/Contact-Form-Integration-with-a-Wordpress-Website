<script>
	wpcf7Elm = document.querySelector('.wpcf7');
	wpcf7Elm.addEventListener('wpcf7mailsent', function(event) {
		// Ensure you replace 'FORMID' with the actual form ID from Contact Form 7
		if ('FORMID' == event.detail.contactFormId) {
			// Collect form data using jQuery
			var your_name = jQuery("input[name=your-name]").val();
			var product1 = jQuery("input[name=product-1]").val();
			var product2 = jQuery("input[name=product-2]").val();
			var product3 = jQuery("input[name=product-3]").val();
			var product4 = jQuery("input[name=product-4]").val();
			var product5 = jQuery("input[name=product-5]").val();
			var product6 = jQuery("input[name=product-6]").val();
			var quantity = jQuery("input[name=quantity]").val();
			var color = jQuery("input[name=color]").val();
			var import_color = jQuery("input[name=import_color]").val();
			var buisness_name = jQuery("input[name=buisness-name]").val();
			var first_last_name = jQuery("input[name=first-last-name]").val();
			var email = jQuery("input[name=email]").val();
			var phone = jQuery("input[name=phone]").val();
			var inhands = jQuery("input[name=inhands]").val();
			var event_name_check = jQuery("input[name=event_name_check]").val();
			var notes = jQuery("textarea[name=notes]").val();
			// API call to add company info
			var requestCompany = new XMLHttpRequest();
			requestCompany.open('POST', 'YOUR_COMPANY_API_URL'); // Replace with the actual API URL
			requestCompany.setRequestHeader('Content-Type', 'application/json');
			requestCompany.onreadystatechange = function() {
				if (this.readyState === 4) {
					console.log('Company API Response Status:', this.status);
					console.log('Company API Response Body:', this.responseText);
				}
			};
			var body_company = {
				'company': {
					'name': buisness_name,
					'primaryEmail': email,
					'primaryPhone': phone,
					'otherInfo': 'Promo Lead',
					'contactsAttributes': [{
						'name': buisness_name,
						'email': email,
						'phone': phone
					}]
				}
			};
			requestCompany.send(JSON.stringify(body_company));
			// API call to add lead entry
			var requestLead = new XMLHttpRequest();
			requestLead.open('POST', 'YOUR_LEAD_ENTRY_API_URL'); // Replace with the actual API URL
			requestLead.setRequestHeader('Content-Type', 'application/json');
			requestLead.onreadystatechange = function() {
				if (this.readyState === 4) {
					console.log('Lead Entry API Response Status:', this.status);
					console.log('Lead Entry API Response Body:', this.responseText);
				}
			};
			var sale_lead = {
				title: 'Title', // Replace with actual title
				details: 'Details', // Replace with actual details
				primaryContactName: first_last_name || 'Quick Quote',
				companyName: buisness_name,
				email: email,
				pipelineName: 'Sales Pipeline', // Adjust this as needed
				phoneNumber: phone
			};
			requestLead.send(JSON.stringify(sale_lead));
		}
	}, false);
</script>