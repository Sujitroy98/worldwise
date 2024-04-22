import styles from './CountryList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import CountryItem from './CountryItem';
import { useCities } from '../Contexts/Citiescontext';

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message={'Add your first city by clicking on city on Map'} />
    );

  const countries = cities.reduce((arr, city) => {
    console.log(arr)
    if (!arr.map(el => el.country).includes(city.country))
    
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
    
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
