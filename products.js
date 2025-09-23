const Hydraulic_major_seals = document.getElementById("Hydraulic_major_seals");

const show_Hydraulic_major_seals = () => {
    Hydraulic_major_seals.innerHTML = Hydraulic_major_seals_datas.map((rings)=>{
      return `
        <div class="product-card">
            <img src="${rings.image}" alt="${rings.name}">
            <h3>Hydraulic major seal</h3>
            <p class="price">Make:${rings.make}</p>
            <p class="price">Size:${rings.size}</p>
            <button>Buy Now</button>
        </div>
      `;
    }).join("");
};
show_Hydraulic_major_seals();




/*=============================================================*/



const High_Quality_Batteries = document.getElementById("High_Quality_Batteries");

const show_High_Quality_Batteries = () => {
    High_Quality_Batteries.innerHTML = High_Quality_Batteries_datas.map((Batteries)=>{
      return `
        <div class="product-card">
            <img src="${Batteries.image}" alt="${Batteries.name}">
            <h3>High Quality Batteries</h3>
            <p class="price">Make:${Batteries.make}</p>
            <p class="price">Size:${Batteries.size}</p>
            <button>Buy Now</button>
        </div>
      `;
    }).join("");
};


show_High_Quality_Batteries();


/*=============================================================*/



const Quality_Grease = document.getElementById("Quality_Grease");

const show_Quality_Grease = () => {
    Quality_Grease.innerHTML = Quality_Grease_datas.map((grease)=>{
      return `
        <div class="product-card">
            <img src="${grease.image}" alt="${grease.name}">
            <h3>Quality Grease</h3>
            <p class="price">Make:${grease.make}</p>
            <p class="price">Size:${grease.size}</p>
            <button>Buy Now</button>
        </div>
      `;
    }).join("");
};


show_Quality_Grease();

/*     ==================================================*/

const under_carriage = document.getElementById("under_carriage");

const show_under_carriage = () => {
    under_carriage.innerHTML = under_carriage_datas.map((under_carriage)=>{
      return `
        <div class="product-card">
            <img src="${under_carriage.image}" alt="${under_carriage.name}">
            <h3>under_carriage</h3>
            <p class="price">Make:${under_carriage.make}</p>
            <p class="price">Size:${under_carriage.size}</p>
            <button>Buy Now</button>
        </div>
      `;
    }).join("");
};


show_under_carriage();





/*     ==================================================*/

const track_pin = document.getElementById("track_pin");

const show_track_pin = () => {
    track_pin.innerHTML = track_pin_datas.map((track_pin)=>{
      return `
        <div class="product-card">
            <img src="${track_pin.image}" alt="${track_pin.name}">
            <h3>Track Pin</h3>
            <p class="price">Make:${track_pin.make}</p>
            <p class="price">Size:${track_pin.size}</p>
            <button>Buy Now</button>
        </div>
      `;
    }).join("");
};


show_track_pin();



/*     =====================          O_ring_boxes           =============================*/

const O_ring_boxes = document.getElementById("O_ring_boxes");

const show_O_ring_boxes = () => {
    O_ring_boxes.innerHTML = O_ring_box_datas.map((O_ring_box)=>{
      return `
        <div class="product-card">
            <img src="${O_ring_box.image}" alt="${O_ring_box.name}">
            <h3>Track Pin</h3>
            <p class="price">Make:${O_ring_box.make}</p>
            <p class="price">Size:${O_ring_box.size}</p>
            <button>Buy Now</button>
        </div>
      `;
    }).join("");
};


show_O_ring_boxes();


/*     =====================          O_ring_boxes           =============================*/

const Excavator_bucket_pin = document.getElementById("Excavator_bucket_pin");

const show_Excavator_bucket = () => {
    Excavator_bucket_pin.innerHTML = Excavator_bucket_pin_datas.map((Excavator_bucket)=>{
      return `
        <div class="product-card">
            <img src="${Excavator_bucket.image}" alt="${Excavator_bucket.name}">
            <h3>Excavator bucket pin</h3>
            <p class="price">Make:${Excavator_bucket.make}</p>
            <p class="price">Size:${Excavator_bucket.size}</p>
            <button>Buy Now</button>
        </div>
      `;
    }).join("");
};


show_Excavator_bucket();

/*     =====================          Pump_Seals           =============================*/

const Pump_Seals = document.getElementById("Pump_Seals");

const show_Pump_Seals = () => {
    Pump_Seals.innerHTML = Pump_Seals_datas.map((Pump_Seals)=>{
      return `
        <div class="product-card">
            <img src="${Pump_Seals.image}" alt="${Pump_Seals.name}">
            <h3>Pump Seals</h3>
            <p class="price">Make:${Pump_Seals.make}</p>
            <p class="price">Size:${Pump_Seals.size}</p>
            <button>Buy Now</button>
        </div>
      `;
    }).join("");
};


show_Pump_Seals();

/*     =====================          Filters           =============================*/

const Filters = document.getElementById("Filters");

const show_Filters = () => {
    Filters.innerHTML = Filters_datas.map((Filters)=>{
      return `
        <div class="product-card">
            <img src="${Filters.image}" alt="${Filters.name}">
            <h3>Filters</h3>
            <p class="price">Make:${Filters.make}</p>
            <p class="price">Size:${Filters.size}</p>
            <button>Buy Now</button>
        </div>
      `;
    }).join("");
};


show_Filters();
/*     =====================          Filters           =============================*/

const Bushing = document.getElementById("Bushing");

const show_Bushing = () => {
    Bushing.innerHTML = Bushing_datas.map((Bushing)=>{
      return `
        <div class="product-card">
            <img src="${Bushing.image}" alt="${Bushing.name}">
            <h3>Bushing</h3>
            <p class="price">Make:${Bushing.make}</p>
            <p class="price">Size:${Bushing.size}</p>
            <button>Buy Now</button>
        </div>
      `;
    }).join("");
};


show_Bushing();
