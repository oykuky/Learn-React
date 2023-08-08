import PropTypes from 'prop-types';

function User ( {name, age, friends,isLoggedin}){
     if(!isLoggedin) {return <div className='m-4 text-danger '> GİRİŞ YAPILMADI !</div>} 

    return (
        <>
        <h2> {name} 'nün  ({age}) </h2>
        <h3>Arkadaşları</h3>
        
      {  friends &&
        friends.map(
            (person) => (<div key={person.id} >{person.name}</div>)
        )
        
      }
              
        </>
    );
} 

// kullanılan verilerin tipleri (kontrol)
User.propTypes = {
  name : PropTypes.string.isRequired,
  isLoggedin : PropTypes.bool.isRequired,
  age: PropTypes.oneOfType([PropTypes.number , PropTypes.string]),  //oneoftype ile birden fazzla veri tipi kabul edilir
  friends : PropTypes.array
}

User.defaultProps = {
  name: "isimsiz",
  isLoggedin : false
}
export default User;