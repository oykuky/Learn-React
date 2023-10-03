
function LangButton({setLocale} ){
  return (
    <div>
        <button onClick={()=>setLocale('tr-TR')}>TR</button>
        <button onClick={()=>setLocale('en-US')}>EN</button>
    </div>
  )
}

export default LangButton