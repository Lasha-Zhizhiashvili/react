function FilterFixer({text, everything}){
    return(
        <>
          <div className="fill-box" style={{borderBottom: '1px #112211 solid', marginTop: '32px', paddingBottom: '20px'}}>
            <div style={{display: 'flex'}}>
                <h5>{text}</h5>
                   <svg style={{margin: 'auto 0 auto auto'}} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M14.75 8L8 1.25L1.25 8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
            </div>
            {everything}
          </div>
        </>
    )
}

export default FilterFixer