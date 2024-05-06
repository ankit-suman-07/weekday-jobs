const initialState = {
    jobs: [
        {
            jdUid: '',
            jdLink: '',
            jobDetailsFromCompany: "",
            maxJdSalary: 0,
            minJdSalary: 0,
            salaryCurrencyCode: '',
            location: '',
            minExp: 0,
            maxExp: 0,
            jobRole: '',
            companyName: '',
            logoUrl: ''
        }
    ]

}

export default (state = initialState, action) => {
    return state;
}