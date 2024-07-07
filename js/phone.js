const LoadPhonesData = async(searchText) =>{
      const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
      const data = await res.json();
      const phones = data.data
    //   console.log(phones)
      displayPhones(phones)
}

const displayPhones = (phones) =>{
      console.log(phones)

      const phoneContainer = document.getElementById('phone-container');
      phoneContainer.textContent = "";

        phones.forEach(phone=>{
            const phoneCard = document.createElement('div');
            phoneCard.classList = `card bg-base-100 w-96 shadow-xl`;
            phoneCard.innerHTML = `
            <figure>
                            <img
                              src="${phone.image}"
                              alt="Shoes" />
                          </figure>
                          <div class="card-body">
                            <h2 class="card-title">${phone.phone_name}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-center">
                              <button class="btn btn-primary">Show Details</button>
                            </div>
                          </div>
            
            `
            phoneContainer.appendChild(phoneCard)
        })
  
}

const handleSearch = () =>{
     const searchField = document.getElementById('input-field');
     const searchText = searchField.value;
     LoadPhonesData(searchText)
     

}

// LoadPhonesData()