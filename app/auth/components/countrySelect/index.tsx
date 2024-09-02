import styles from '@/app/auth/signup/signup.module.scss';

const countries = [
    "Argentina", "Australia", "Austria", "Belgium", "Brazil",
    "Canada", "Chile", "China", "Colombia", "Denmark",
    "Egypt", "Finland", "France", "Germany", "Greece",
    "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Japan", "Kenya", "Malaysia",
    "Mexico", "Netherlands", "New Zealand", "Nigeria", "Norway",
    "Pakistan", "Peru", "Philippines", "Poland", "Portugal",
    "Russia", "Saudi Arabia", "Singapore", "South Africa", "South Korea",
    "Spain", "Sweden", "Switzerland", "Thailand", "Turkey",
    "United Arab Emirates", "United Kingdom", "United States", "Venezuela", "Vietnam"
];

const CountrySelect = () => {
    return <select id="country" className={`${styles.input} form-control border-primary`} required>
        <option value=""></option>
        {countries.map((country, index) => <option key={index} value={country}>{country}</option>)
        }
    </select>;
};

export default CountrySelect;