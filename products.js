const Hydraulic_major_seals = document.getElementById("Hydraulic_major_seals");

const show_Hydraulic_major_seals = () => {
    Hydraulic_major_seals.innerHTML = Hydraulic_major_seals_datas.map((Hydraulic_major_seals)=>{
      const{name, id, image, make, size,} = Hydraulic_major_seals;
      return `
        <div id=product-id-${id} class="product-card">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p class="price">Make:${make}</p>
            <p class="price">Size:${size}</p>
            <button onclick="add_to_cart(${id})">Buy Now</button>
        </div>
      `;
    }).join("");
};
show_Hydraulic_major_seals();




/*=============================================================*/



const High_Quality_Batteries = document.getElementById("High_Quality_Batteries");

const show_High_Quality_Batteries = () => {
    High_Quality_Batteries.innerHTML = High_Quality_Batteries_datas.map((Batteries)=>{
      const{name, id, image, make, size,} = Batteries;
      return `
        <div id=product-id-${id} class="product-card">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p class="price">Make:${make}</p>
            <p class="price">Size:${size}</p>
            <button onclick="add_to_cart(${id})">Buy Now</button>
        </div>
      `;
    }).join("");
};


show_High_Quality_Batteries();


/*=============================================================*/



const Quality_Grease = document.getElementById("Quality_Grease");

const show_Quality_Grease = () => {
    Quality_Grease.innerHTML = Quality_Grease_datas.map((grease)=>{
      const{name, id, image, make, size,} = grease;
      return `
        <div id=product-id-${id} class="product-card">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p class="price">Make:${make}</p>
            <p class="price">Size:${size}</p>
            <button onclick="add_to_cart(${id})">Buy Now</button>
        </div>
      `;
    }).join("");
};


show_Quality_Grease();

/*     ==================================================*/

const under_carriage = document.getElementById("under_carriage");

const show_under_carriage = () => {
    under_carriage.innerHTML = under_carriage_datas.map((under_carriage)=>{
      const{name, id, image, make, size,} = under_carriage;
      return `
        <div id=product-id-${id} class="product-card">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p class="price">Make:${make}</p>
            <p class="price">Size:${size}</p>
            <button onclick="add_to_cart(${id})">Buy Now</button>
        </div>
      `;
    }).join("");
};


show_under_carriage();





/*     ==================================================*/

const track_pin = document.getElementById("track_pin");

const show_track_pin = () => {
    track_pin.innerHTML = track_pin_datas.map((track_pin)=>{
      const{name, id, image, make, size,} = track_pin;
      return `
        <div id=product-id-${id} class="product-card">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p class="price">Make:${make}</p>
            <p class="price">Size:${size}</p>
            <button onclick="add_to_cart(${id})">Buy Now</button>
        </div>
      `;
    }).join("");
};


show_track_pin();



/*     =====================          O_ring_boxes           =============================*/

const O_ring_boxes = document.getElementById("O_ring_boxes");

const show_O_ring_boxes = () => {
    O_ring_boxes.innerHTML = O_ring_box_datas.map((O_ring_box)=>{
      const{name, id, image, make, size,} = O_ring_box;
      return `
        <div id=product-id-${id} class="product-card">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p class="price">Make:${make}</p>
            <p class="price">Size:${size}</p>
            <button onclick="add_to_cart(${id})">Buy Now</button>
        </div>
      `;
    }).join("");
};


show_O_ring_boxes();


/*     =====================         Excavator_bucket_ PIN           =============================*/

const Excavator_bucket_pin = document.getElementById("Excavator_bucket_pin");

const show_Excavator_bucket_pin = () => {
    Excavator_bucket_pin.innerHTML = Excavator_bucket_pin_datas.map((Excavator_bucket)=>{
      const{name, id, image, make, size,} = Excavator_bucket;
      return `
        <div id=product-id-${id} class="product-card">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p class="price">Make:${make}</p>
            <p class="price">Size:${size}</p>
            <button onclick="add_to_cart(${id})">Buy Now</button>
        </div>
      `;
    }).join("");
};


show_Excavator_bucket_pin();

/*     =====================         Excavator_bucket_ PIN           =============================*/

const Excavator_bucket_cylinder = document.getElementById("Excavator_bucket_cylinder");

const show_Excavator_bucket_cylinder = () => {
    Excavator_bucket_cylinder.innerHTML = Excavator_bucket_cylinder_datas.map((Excavator_bucket_cylinder)=>{
      const{name, id, image, make, size,} = Excavator_bucket_cylinder;
      return `
        <div id=product-id-${id} class="product-card">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p class="price">Make:${make}</p>
            <p class="price">Size:${size}</p>
            <button onclick="add_to_cart(${id})">Buy Now</button>
        </div>
      `;
    }).join("");
};


show_Excavator_bucket_cylinder();

/*     =====================          Pump_Seals           =============================*/

const Pump_Seals = document.getElementById("Pump_Seals");

const show_Pump_Seals = () => {
    Pump_Seals.innerHTML = Pump_Seals_datas.map((Pump_Seals)=>{
      const{name, id, image, make, size,} = Pump_Seals;
      return `
        <div id=product-id-${id} class="product-card">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p class="price">Make:${make}</p>
            <p class="price">Size:${size}</p>
            <button onclick="add_to_cart(${id})">Buy Now</button>
        </div>
      `;
    }).join("");
};


show_Pump_Seals();

/*     =====================          Filters           =============================*/

const Filters = document.getElementById("Filters");

const show_Filters = () => {
    Filters.innerHTML = Filters_datas.map((Filters)=>{
       const{name, id, image, make, size,} =Filters;
      return `
        <div id=product-id-${id} class="product-card">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p class="price">Make:${make}</p>
            <p class="price">Size:${size}</p>
            <button onclick="add_to_cart(${id})">Buy Now</button>
        </div>
      `;
    }).join("");
};


show_Filters();
/*     =====================          bushing           =============================*/

const Bushing = document.getElementById("Bushing");

const show_Bushing = () => {
    Bushing.innerHTML = Bushing_datas.map((Bushing)=>{
      const{name, id, image, make, size,} = Bushing;
      return `
        <div id=product-id-${id} class="product-card">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p class="price">Make:${make}</p>
            <p class="price">Size:${size}</p>
            <button onclick="add_to_cart(${id})">Buy Now</button>
        </div>
      `;
    }).join("");
};


show_Bushing();



/*     =====================          seal kits           =============================*/

const seal_kit = document.getElementById("seal_kit");

const show_seal_kit = () => {
    seal_kit.innerHTML = Seal_kit_datas.map((seal_kit)=>{
      const{name, id, image, make, size,} = seal_kit;
      return `
        <div id=product-id-${id} class="product-card">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p class="price">Make:${make}</p>
            <p class="price">Size:${size}</p>
            <button onclick="add_to_cart(${id})">Buy Now</button>
        </div>
      `;
    }).join("");
};


show_seal_kit();

/*     =====================          OTHER ITEMS           =============================*/

const others = document.getElementById("others");

const show_others = () => {
    others.innerHTML = Other_items_datas.map((others)=>{
      const{name, id, image, make, size,} = others;
      return `
        <div id=product-id-${id} class="product-card">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p class="price">Make:${make}</p>
            <p class="price">Size:${size}</p>
            <button onclick="add_to_cart(${id})">Buy Now</button>
        </div>
      `;
    }).join("");
};


show_others();



/* ==================================================*/

const add_to_cart = (id) =>{
  const selected_item = id;
  // the next line of code will send the selected product's name to the sellers's whatsapp
  const product_name = document.querySelector(`#product-id-${id} h3`).innerText;
  const whatsapp_number = "+2347058091721"; // replace with actual number
  const message = `Hi, I'm interested in buying ${product_name}.`;
  window.open(`https://wa.me/${whatsapp_number}?text=${encodeURIComponent(message)}`);
}