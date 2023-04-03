let globalIsSubmitted = false
console.log('kk')

function validate(isSubmitted = false) {


    let companyName = document.getElementById('CompanyName').value
    let JobTitle = document.getElementById('JobTitle').value
    let Country = document.getElementById('Country').value
    let City = document.getElementById('City').value
    let Level = document.getElementById('Level').value
    let MinExp = document.getElementById('MinExp').value
    let MaxExp = document.getElementById('MaxExp').value
    let EmpType = document.getElementById('EmpType').value
    // let vacancy = document.getElementById('vacancy').value
    let Location = document.getElementById('Location').value
    let Salary = document.getElementById('Salary').value
    let ProfileRequirement = document.getElementById('ProfileRequirement').value
    let aboutCompany = document.getElementById('aboutCompany').value
    let Companyweb = document.getElementById('Companyweb').value
    let Language = document.getElementById('Language').value
    let jobLink = document.getElementById('jobLink').value
    let validdays = document.getElementById('validdays').value
    let noticePeriod = document.getElementById('noticePeriod').value
    let Profession = document.getElementById('Profession').value
    let Sector = document.getElementById('Sector').value
    // let Software = document.getElementById('Software').value
    let Contactinfo = document.getElementById('Contactinfo').value
    // let email = document.getElementById('email').value

    let error = false

    var letters = /^[a-zA-Z]+$/;
    var numbers = /^[0-9]+$/;

    if (isSubmitted) {

        globalIsSubmitted = true
    }
    if (globalIsSubmitted) {

        // Company Name
        if (companyName.length >= 3) {
            document.getElementById('CompanyName-valid').style.display = 'block'
            document.getElementById('CompanyName-invalid').style.display = 'none'
        } else {
            document.getElementById('CompanyName-invalid').style.display = 'block'
            document.getElementById('CompanyName-valid').style.display = 'none'
            error = true
        }

        // Country 
        if (Country.length >= 3) {
            document.getElementById('Country-valid').style.display = 'block'
            document.getElementById('Country-invalid').style.display = 'none'
        } else {
            document.getElementById('Country-valid').style.display = 'none'
            document.getElementById('Country-invalid').style.display = 'block'
            error = true
        }

        //City
        if (City.length >= 3) {
            document.getElementById('City-valid').style.display = 'block'
            document.getElementById('City-invalid').style.display = 'none'

        } else {
            document.getElementById('City-valid').style.display = 'none'
            document.getElementById('City-invalid').style.display = 'block'
            error = true
        }

        //Salary
        if (Salary.length >= 2) {
            document.getElementById('Salary-valid').style.display = 'block'
            document.getElementById('Salary-invalid').style.display = 'none'

        } else {
            document.getElementById('Salary-valid').style.display = 'none'
            document.getElementById('Salary-invalid').style.display = 'block'
            error = true
        }

        //Job Title 
        if (JobTitle.length >= 2) {
            document.getElementById('JobTitle-valid').style.display = 'block'
            document.getElementById('JobTitle-invalid').style.display = 'none'

        } else {

            document.getElementById('JobTitle-valid').style.display = 'none'
            document.getElementById('JobTitle-invalid').style.display = 'block'
            error = true
        }

        //Language
        if (Language.length >= 3) {
            document.getElementById('Language-valid').style.display = 'block'
            document.getElementById('Language-invalid').style.display = 'none'
        } else {
            document.getElementById('Language-valid').style.display = 'none'
            document.getElementById('Language-invalid').style.display = 'block'
            error = true
        }

        // Level
        if (Level != 'None') {
            document.getElementById('Level-valid').style.display = 'block'
            document.getElementById('Level-invalid').style.display = 'none'
        } else {
            document.getElementById('Level-invalid').style.display = 'block'
            document.getElementById('Level-valid').style.display = 'none'
            error = true
        }

        // MinExp
        if (MinExp != 'None') {
            document.getElementById('MinExp-valid').style.display = 'block'
            document.getElementById('MinExp-invalid').style.display = 'none'
        } else {
            document.getElementById('MinExp-invalid').style.display = 'block'
            document.getElementById('MinExp-valid').style.display = 'none'
            error = true
        }

        // MaxExp
        if (MaxExp != 'None') {
            document.getElementById('MaxExp-valid').style.display = 'block'
            document.getElementById('MaxExp-invalid').style.display = 'none'
        } else {
            document.getElementById('MaxExp-invalid').style.display = 'block'
            document.getElementById('MaxExp-valid').style.display = 'none'
            error = true
        }

        // EmpType
        if (EmpType != 'None') {
            document.getElementById('EmpType-valid').style.display = 'block'
            document.getElementById('EmpType-invalid').style.display = 'none'
        } else {
            document.getElementById('EmpType-invalid').style.display = 'block'
            document.getElementById('EmpType-valid').style.display = 'none'
            error = true
        }

        // Location
        if (Location != 'None') {
            document.getElementById('Location-valid').style.display = 'block'
            document.getElementById('Location-invalid').style.display = 'none'
        } else {
            document.getElementById('Location-invalid').style.display = 'block'
            document.getElementById('Location-valid').style.display = 'none'
            error = true
        }

        // validdays noticePeriod Profession Sector Software


        // 2nd div
        //ProfileRequirement
        if (ProfileRequirement.length >= 3) {
            document.getElementById('ProfileRequirement-valid').style.display = 'block'
            document.getElementById('ProfileRequirement-invalid').style.display = 'none'
        } else {
            document.getElementById('ProfileRequirement-valid').style.display = 'none'
            document.getElementById('ProfileRequirement-invalid').style.display = 'block'
            error = true
        }

        //aboutCompany
        if (aboutCompany.length >= 3) {
            document.getElementById('aboutCompany-valid').style.display = 'block'
            document.getElementById('aboutCompany-invalid').style.display = 'none'
        } else {
            document.getElementById('aboutCompany-valid').style.display = 'none'
            document.getElementById('aboutCompany-invalid').style.display = 'block'
            error = true
        }

        //Companyweb
        if (Companyweb.length >= 3) {
            document.getElementById('Companyweb-valid').style.display = 'block'
            document.getElementById('Companyweb-invalid').style.display = 'none'
        } else {
            document.getElementById('Companyweb-valid').style.display = 'none'
            document.getElementById('Companyweb-invalid').style.display = 'block'
            error = true
        }

        //jobLink
        if (jobLink.length >= 3) {
            document.getElementById('jobLink-valid').style.display = 'block'
            document.getElementById('jobLink-invalid').style.display = 'none'
        } else {
            document.getElementById('jobLink-valid').style.display = 'none'
            document.getElementById('jobLink-invalid').style.display = 'block'
            error = true
        }

        //Contactinfo
        if (Contactinfo.length === 10 && Contactinfo.match(numbers)) {
            document.getElementById('Contactinfo-valid').style.display = 'block'
            document.getElementById('Contactinfo-invalid').style.display = 'none'
        } else {
            document.getElementById('Contactinfo-invalid').style.display = 'block'
            document.getElementById('Contactinfo-valid').style.display = 'none'
            error = true
        }

  // validdays
  if (validdays != 'None') {
    document.getElementById('validdays-valid').style.display = 'block'
    document.getElementById('validdays-invalid').style.display = 'none'
} else {
    document.getElementById('validdays-invalid').style.display = 'block'
    document.getElementById('validdays-valid').style.display = 'none'
    error = true
}

 // noticePeriod
 if (noticePeriod != 'None') {
    document.getElementById('noticePeriod-valid').style.display = 'block'
    document.getElementById('noticePeriod-invalid').style.display = 'none'
} else {
    document.getElementById('noticePeriod-invalid').style.display = 'block'
    document.getElementById('noticePeriod-valid').style.display = 'none'
    error = true
}
 // Profession
 if (Profession != 'None') {
    document.getElementById('Profession-valid').style.display = 'block'
    document.getElementById('Profession-invalid').style.display = 'none'
} else {
    document.getElementById('Profession-invalid').style.display = 'block'
    document.getElementById('Profession-valid').style.display = 'none'
    error = true
}
 // Sector
 if (Sector != 'None') {
    document.getElementById('Sector-valid').style.display = 'block'
    document.getElementById('Sector-invalid').style.display = 'none'
} else {
    document.getElementById('Sector-invalid').style.display = 'block'
    document.getElementById('Sector-valid').style.display = 'none'
    error = true
} 

// // Software
// if (Software != 'None') {
//    document.getElementById('Software-valid').style.display = 'block'
//    document.getElementById('Software-invalid').style.display = 'none'
// } else {
//    document.getElementById('Software-invalid').style.display = 'block'
//    document.getElementById('Software-valid').style.display = 'none'
//    error = true
// }



        // //email address
        // if (email.includes("@") &&
        //     email.includes(".")) {
        //     document.getElementById("email-valid").style.display = "block";
        //     document.getElementById("email-invalid").style.display = "none";
        // } else {
        //     document.getElementById("email-invalid").style.display = "block";
        //     document.getElementById("email-valid").style.display = "none";
        //     error = true
        // }


        //mobile number
        // if (mobile.length === 10 && mobile.match(numbers)) {
        // 	document.getElementById('mobile-valid').style.display = 'block'
        // 	document.getElementById('mobile-invalid').style.display = 'none'
        // } else {
        // 	document.getElementById('mobile-invalid').style.display = 'block'
        // 	document.getElementById('mobile-valid').style.display = 'none'
        // 	error = true
        // }







        if (!error && isSubmitted) {
            alert('Your details have been saved successfully!')
            // document.getElementById('last-name-invalid').style.display = 'block'

            document.getElementById('job-registration-form').reset()

            let validFeedbacks = document.getElementsByClassName('valid-feedback')
            for (let i = 0; i < validFeedbacks.length; i++) {
                validFeedbacks[i].style.display = 'none'
            }
            let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
            for (let i = 0; i < invalidFeedbacks.length; i++) {
                invalidFeedbacks[i].style.display = 'none'
            }
        }
    }
}