import React from 'react'
import { useState,useEffect} from 'react'


// UseEffect syntaxı ->  component yüklediğinde olan işlemler
// useEffect(()=> {},[]);
//useEffect ile yaşam döngüsündeki eventler yakalanır 
//useEffect useState gibi hooklar kullanılırken herhangi bi if bloğu içinde kullanılamaz
function UseEffect() {

    // const [newnumber ,setNewnumber] = useState(0)
    const [INCnumber ,setINCNumber] = useState(0);
    const [DECnumber ,setDECNumber] = useState(0);

//     useEffect(() => {
//     console.log("COMPONENT MOUNTED");

//     setInterval(() => {
//         setNewnumber((n) => n + 1);
//     },1000)

// },[])

    //RETURN İLE UNMOUNT OLDUĞUNDA YAPILACAK İŞLEM YAPILIR
    useEffect(() => {
    console.log("component mounted") ;
    return () => console.log("component unmounted")
},[]);

    useEffect(() => {console.log("INCREASE STATE UPDATED")},[INCnumber])
    useEffect(() => {console.log("DECREASE STATE UPDATED")},[DECnumber])

 

  return (
    <div className='App m-5'>
        <h2>{INCnumber}</h2>
        <button onClick={() => setINCNumber(INCnumber + 1)}>CLICK</button>
        <hr/>
        <br/>
        <h2>{DECnumber}</h2>
        <button onClick={() => setDECNumber(DECnumber - 1)}>CLICK</button>
        {/* <h2>{newnumber}</h2> */}
    </div>
  )
}

export default UseEffect