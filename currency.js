document.addEventListener('DOMContentLoaded', function() {
    // Get modal and button elements
    var container = document.getElementById("containerModal");
    var btn = document.getElementById("companyContactButton");
    var span = document.getElementsByClassName("close-btn")[0];

    // Open the modal when the link is clicked
    btn.onclick = function() {
        container.style.display = "block";
    }

    // Close the modal when the close button is clicked
    span.onclick = function () {
        console.log("Close button clicked");
        container.style.display = "none";
    };

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == container) {
            container.style.display = "none";
        }
    }

    // Handle currency dropdown change
    document.getElementById('currencyDropdown').addEventListener('change', function() {
        const selectedCurrency = this.value;
        if (selectedCurrency) {
            // Display the selected currency or use it for further actions
            console.log(`You selected: ${selectedCurrency}`);
        }
    });
});

  
  const denominationsData = {
        USD: ["$1", "$2", "$5", "$10", "$20", "$50", "$100"],
        EUR: ["€5", "€10", "€20", "€50", "€100", "€200", "€500"],
        INR: ["₹1", "₹2", "₹5", "₹10", "₹20", "₹50", "₹100", "₹200", "₹500", "₹2000"],
        AED: ["1 Dirham", "5 Dirhams", "10 Dirhams", "20 Dirhams", "50 Dirhams", "100 Dirhams", "200 Dirhams", "500 Dirhams", "1000 Dirhams"],
        PHP: ["10₱", "20₱", "50₱", "100₱", "200₱" ,"500₱", "1000₱"],
        AUD: ["5$", "10$", "20$", "50$", "100$"],
        BHD: ["0.5.د.ب", "1.د.ب", "10.د.ب", "20.د.ب"],
        CAD: ["5$", "10$", "20$", "50$", "100$"],
        CNY: ["1¥", "2¥", "5¥", "10¥", "20¥", "50¥","100¥"],
        EGP: ["5£", "10£", "20£", "50£", "100£", "200£"],
        GBP: ["5£", "10£", "20£", "50£"],
        HKD: ["10元", "20元", "50元", "100元", "500元","1000元"],
        IQD: ["5000 د.ع", "10000 د.ع", "20000 د.ع"],
        KWD: ["1د.ك","5د.ك", "10د.ك", "20د.ك"],
        LKR: ["10Rs", "20Rs", "50Rs", "100Rs", "200Rs", "500Rs","1000Rs","2000Rs","5000Rs"],
        MAD: ["20DH", "50DH", "100DH", "200DH"],
        MYR: ["1RM", "5RM", "10RM", "50RM", "100RM"],
        OMR: ["1﷼", "5﷼", "10﷼", "20﷼", "50﷼"],
        QAR: ["5QR","10QR","50QR", "100QR", "500QR"],
        SAR: ["5SAR", "10SAR","20SAR","50SAR","100SAR","200SAR","500SAR"],
        SGD: ["5S$", "10S$","50S$","100S$"],
        KRW: ["1000₩", "5000₩", "10000₩"],
        THB: ["20฿", "50฿", "100฿", "500฿", "1000฿"],
        TRY: ["5TL", "10TL", "20TL", "50TL", "100TL", "200TL"],
        VND: ["10000₫/đ", "20000₫/đ", "50000₫/đ", "100000₫/đ", "200000₫/đ"],
        ZAR: ["10R", "20R", "50R","100R", "200R"],
        CHF: ["10₣", "20₣" , "50₣", "100₣"],
        JOD: ["1د.أ", "5د.أ", "10د.أ", "20د.أ", "50د.أ"],
        LBP: ["1000ل.ل", "5000ل.ل", "20000ل.ل", "50000ل.ل", "100000ل.ل"],
        NZD: ["5$", "10$", "20$"],
        AMD: ["1000֏","5000֏", "10000֏", "20000֏", "100000֏"],
        SEKNIC: ["20kr", "50kr", "1000kr"],
    };

    
    const currencyDropdown = document.getElementById("currencyDropdown");
    const denominationDropdown = document.getElementById("denominationDropdown");

    
    currencyDropdown.addEventListener("change", function () {
        const selectedCurrency = currencyDropdown.value;

        
        denominationDropdown.innerHTML = '<option value="">-- Select Denomination --</option>';

        if (selectedCurrency && denominationsData[selectedCurrency]) {
            
            denominationsData[selectedCurrency].forEach(denomination => {
                const option = document.createElement("option");
                option.value = denomination;
                option.textContent = denomination;
                denominationDropdown.appendChild(option);
            });

            
            denominationDropdown.disabled = false;
        } else {
            
            denominationDropdown.disabled = true;
        }
    });

    const currencyData = {
    USD: {
        denominations: ["$1", "$2", "$5", "$10", "$20", "$50", "$100"],
        images: {
            "$1": { front: "https://th.bing.com/th/id/OIP.kgyllEjE99Yb2dkvRnM2BwHaDY?rs=1&pid=ImgDetMain", back: "https://t3.ftcdn.net/jpg/03/51/58/42/360_F_351584250_FTu6A49neCfT5sW5yqVYBWWDhpWL6f2B.jpg" },
            "$2": { front: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/US_%242_bill_obverse_series_2003_A.jpg/1200px-US_%242_bill_obverse_series_2003_A.jpg", back: "https://th.bing.com/th/id/R.85b0ac5b8d658c8abde26928d161d7ef?rik=%2blguPL0LoA7AxA&riu=http%3a%2f%2fthecoincollector.yolasite.com%2fresources%2f2+Dollar+United+States+Banknote+from+2003+front.jpg&ehk=JDqa4u2MqVYdpxe9lB2g85KTpdEI%2fKhD1CMY3tygyIw%3d&risl=&pid=ImgRaw&r=0" },
            "$5": { front: "https://th.bing.com/th/id/OIP.CB4QKxRb2TXs4jZ8f2m5GAHaDR?rs=1&pid=ImgDetMain", back: "https://th.bing.com/th/id/OIP.wJxSGR-I_vuRs0HAU-2-dwHaDR?rs=1&pid=ImgDetMain" },
            "$10": { front: "https://www.gannett-cdn.com/-mm-/b39af1af2bcbfaed006cc07ae6c8a363810b8c95/c=0-0-1782-1007/local/-/media/2015/06/18/USATODAY/USATODAY/635702166766089803-A01-10-DOLLAR-BILL-08.jpg?width=1200", back: "https://th.bing.com/th/id/R.4598d6edc3bad178970f57368058a160?rik=eQA2ujbYvjDRmQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f_CuZnpiaqGJk%2fTBQYkrmBr4I%2fAAAAAAAAAAU%2f_6lpgDUnuH8%2fs1600%2f10dollar_back.jpg&ehk=IqRoL2u%2fZJNr9NPWiSkngJLGHtt%2bF5zoniATZcOcsAo%3d&risl=&pid=ImgRaw&r=0" },
            "$20": { front: "https://th.bing.com/th/id/OIP._OVRG3l7znvCUDEvjnX4SwHaDL?rs=1&pid=ImgDetMain", back: "https://en.numista.com/catalogue/photos/etats-unis/5e9a1815d2bd30.24833712-original.jpg" },
            "$50": { front: "https://th.bing.com/th/id/OIP.vePP2z0ec8HwYm2hx7jgbQHaDE?rs=1&pid=ImgDetMain", back: "https://upload.wikimedia.org/wikipedia/commons/2/2e/%2450_Dollar_Bill_Series_1969C_Front.jpg" },
            "$100": { front: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg", back: "https://c8.alamy.com/comp/RK58PE/back-of-new-one-hundred-dollar-bill-for-your-unique-project-RK58PE.jpg" }
        }
    },
    EUR: {
        denominations: ["€5", "€10", "€20", "€50", "€100", "€200", "€500"],
        images: {
            "€5": { front: "https://example.com/eur-5-front.jpg", back: "https://example.com/eur-5-back.jpg" },
            "€10": { front: "https://example.com/eur-10-front.jpg", back: "https://example.com/eur-10-back.jpg" },
            "€20": { front: "https://example.com/eur-20-front.jpg", back: "https://example.com/eur-20-back.jpg" },
            "€50": { front: "https://example.com/eur-50-front.jpg", back: "https://example.com/eur-50-back.jpg" },
            "€100": { front: "https://example.com/eur-100-front.jpg", back: "https://example.com/eur-100-back.jpg" },
            "€200": { front: "https://example.com/eur-200-front.jpg", back: "https://example.com/eur-200-back.jpg" },
            "€500": { front: "https://example.com/eur-500-front.jpg", back: "https://example.com/eur-500-back.jpg" }
        }
    },
    INR: {
        denominations: ["₹1", "₹2", "₹5", "₹10", "₹20", "₹50", "₹100", "₹200", "₹500", "₹2000"],
        images: {
            "₹1": { front: "https://example.com/inr-1-front.jpg", back: "https://example.com/inr-1-back.jpg" },
            "₹2": { front: "https://example.com/inr-2-front.jpg", back: "https://example.com/inr-2-back.jpg" },
            "₹5": { front: "https://example.com/inr-5-front.jpg", back: "https://example.com/inr-5-back.jpg" },
            "₹10": { front: "https://th.bing.com/th/id/OIP.qwe1s32u0QbK3c-eual2zQHaDc?rs=1&pid=ImgDetMain", back: "https://th.bing.com/th/id/OIP.hQlQjbu1STlSnSwGaHpmogHaDc?w=342&h=162&c=7&r=0&o=5&pid=1.7" },
            "₹20": { front: "https://th.bing.com/th/id/OIP.gq25DUT7KcJPnxkacHVsSwHaDO?rs=1&pid=ImgDetMain", back: "https://th.bing.com/th/id/OIP._N8UOZ25Tpsk1Pc_yxvuswHaDM?w=340&h=151&c=7&r=0&o=5&pid=1.7" },
            "₹50": { front: "https://th.bing.com/th/id/OIP.1_dii3e5IImTXFXqI9JuFwHaDi?w=337&h=166&c=7&r=0&o=5&pid=1.7", back: "https://banknotenews.com/wp-content/uploads/2019/06/India_RBI_50_rupees_2019.00.00_B300c_P111_2FF_089700__r-768x387.jpg" },
            "₹100": { front: "https://banknotenews.com/wp-content/uploads/2022/03/India_RBI_100_rupees_2022.00.00_B301e_P112_3BG_111111_M_f-1536x715.jpg", back: "https://example.com/inr-100-back.jpg" },
            "₹200": { front: "https://banknotenews.com/wp-content/uploads/2023/12/India_RBI_200_rupees_2023.00.00_B302g_P113_8EQ_543350_A_f.jpg", back: "https://th.bing.com/th/id/R.3c8124111856e3b4460b291f0c5b3b28?rik=rUoXWyrBod0KcQ&pid=ImgRaw&r=0" },
            "₹500": { front: "https://banknotenews.com/wp-content/uploads/2012/08/India_RBI_500_rupees_2011.00.00_B290a_P106_9AB_812041_f.jpg", back: "https://th.bing.com/th/id/R.7b4c13a0565358da5a432c31387e62e4?rik=MVrVmboNb079Aw&pid=ImgRaw&r=0&sres=1&sresct=1" },
            "₹2000": { front: "https://img.ma-shops.com/numiscollection/pic/590773.jpg", back: "https://pnghq.com/wp-content/uploads/2023/02/backside-of-2000-rupee-note-png-2876-1024x429.png" }
        }
    },
    AED: {
        denominations: ["1 Dirham", "5 Dirhams", "10 Dirhams", "20 Dirhams", "50 Dirhams", "100 Dirhams", "200 Dirhams", "500 Dirhams", "1000 Dirhams"],
        images: {
            "1 Dirham": { front: "https://example.com/aed-1-front.jpg", back: "https://example.com/aed-1-back.jpg" },
            "5 Dirhams": { front: "https://example.com/aed-5-front.jpg", back: "https://en.numista.com/catalogue/photos/emirats_arabes_unis/630ce029544ff5.35950691-original.jpg" },
            "10 Dirhams": { front: "https://th.bing.com/th/id/OIP.Sia-tk80jLAPmiajU7dPOwHaDV?w=345&h=157&c=7&r=0&o=5&pid=1.7", back: "https://th.bing.com/th/id/OIP.nj_CaCmiOgluTU5d4Fd-zwHaDV?w=345&h=157&c=7&r=0&o=5&pid=1.7" },
            "20 Dirhams": { front: "https://th.bing.com/th/id/OIP.O0laY97IYtC0CEQIKzq4VAHaDE?w=332&h=144&c=7&r=0&o=5&pid=1.7", back: "https://th.bing.com/th/id/OIP.4KEWysGUz1ScDq0BKx2K0QHaDD?w=333&h=144&c=7&r=0&o=5&pid=1.7" },
            "50 Dirhams": { front: "https://ii.mypivots.com/banknotes/aed-5-uae-dirhams-2.jpg", back: "https://th.bing.com/th/id/R.24811a0696ee86e87b439d9626927914?rik=ewelA45BvteVgA&riu=http%3a%2f%2fwww.tourprom.ru%2fsite_media%2fimages%2fbanknote%2f24%2faed-50-2.jpg&ehk=aygc5nK5HafPPquPGd140fpPRx8fzxpDLM80pS1SsX4%3d&risl=&pid=ImgRaw&r=0" },
            "100 Dirhams": { front: "https://en.numista.com/catalogue/photos/emirats_arabes_unis/5e9f9f8cb923c2.61261940-original.jpg", back: "https://en.numista.com/catalogue/photos/emirats_arabes_unis/5f957e9d810f64.60215742-original.jpg" },
            "200 Dirhams": { front: "https://3.bp.blogspot.com/_f1jUohLHvoM/TAcKNPt18JI/AAAAAAAAAQY/vGmp_as-4YU/s1600/banknote+200+dirhams+united+arab+emirates+2008+reverse.jpg", back: "https://thumbs.dreamstime.com/b/large-fragment-reverse-side-aed-two-hundred-dirhams-banknote-united-arab-emirates-features-imagery-central-bank-uae-243533202.jpg" },
            "500 Dirhams": { front: "https://www.arabianbusiness.com/cloud/2023/11/29/uae-500-note-2-1024x425.jpg", back: "https://th.bing.com/th/id/OIP.QR6JDN416YWDUz75oR6IpAHaDD?w=1888&h=778&rs=1&pid=ImgDetMain" },
            "1000 Dirhams": { front: "https://www.shutterstock.com/image-photo/sheikh-zayed-bin-sultan-al-600nw-2294552261.jpg", back: "https://whatson.ae/wp-content/uploads/2022/12/Dhs1000-front.jpg" }
        }
    },

    PHP: {
        denominations: ["10₱", "20₱", "50₱", "100₱", "200₱" ,"500₱", "1000₱"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },

    AUD: {
        denominations: ["5$", "10$", "20$", "50$", "100$"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },

    BHD: {
        denominations: ["0.5.د.ب", "1.د.ب", "10.د.ب", "20.د.ب"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    CAD: {
        denominations: ["5$", "10$", "20$", "50$", "100$"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },

    CNY: {
        denominations: ["1¥", "2¥", "5¥", "10¥", "20¥", "50¥","100¥"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    EGP: {
        denominations: ["5£", "10£", "20£", "50£", "100£", "200£"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    GBP: {
        denominations: ["5£", "10£", "20£", "50£"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    HKD: {
        denominations: ["10元", "20元", "50元", "100元", "500元","1000元"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    IQD: {
        denominations: ["5000 د.ع", "10000 د.ع", "20000 د.ع"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    KWD: {
        denominations: ["1د.ك","5د.ك", "10د.ك", "20د.ك"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    LKR: {
        denominations: ["10Rs", "20Rs", "50Rs", "100Rs", "200Rs", "500Rs","1000Rs","2000Rs","5000Rs"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    MAD: {
        denominations: ["20DH", "50DH", "100DH", "200DH"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    MYR: {
        denominations: ["1RM", "5RM", "10RM", "50RM", "100RM"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    OMR: {
        denominations: ["1﷼", "5﷼", "10﷼", "20﷼", "50﷼"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    QAR: {
        denominations: ["5QR","10QR","50QR", "100QR", "500QR"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    SAR: {
        denominations: ["5SAR", "10SAR","20SAR","50SAR","100SAR","200SAR","500SAR"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    SGD: {
        denominations: ["5S$", "10S$","50S$","100S$"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    KRW: {
        denominations: ["1000₩", "5000₩", "10000₩"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    THB: {
        denominations: ["20฿", "50฿", "100฿", "500฿", "1000฿"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    TRY: {
        denominations: ["5TL", "10TL", "20TL", "50TL", "100TL", "200TL"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    VND: {
        denominations: ["10000₫/đ", "20000₫/đ", "50000₫/đ", "100000₫/đ", "200000₫/đ"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    ZAR: {
        denominations: ["10R", "20R", "50R","100R", "200R"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    CHF: {
        denominations: ["10₣", "20₣" , "50₣", "100₣"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    JOD: {
        denominations: ["1د.أ", "5د.أ", "10د.أ", "20د.أ", "50د.أ"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    LBP: {
        denominations: ["1000ل.ل", "5000ل.ل", "20000ل.ل", "50000ل.ل", "100000ل.ل"],
        images: {
            "$1": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "$2": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "$5": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "$10": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "$20": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "$50": { front: "https://example.com/usd-50-front.jpg", back: "https://example.com/usd-50-back.jpg" },
            "$100": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
    NZD: {
        denominations: ["5$", "10$", "20$"],
        images: {
            "5$": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "10$": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "20$": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
           
        }
    },
    SEKNIC: {
        denominations: ["20kr", "50kr", "1000kr"],
        images: {
            "20k": { front: "https://example.com/usd-1-front.jpg", back: "https://example.com/usd-1-back.jpg" },
            "50kr": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "1000kr": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
          
        }
    },
    AMD: {
        denominations: ["1000֏","5000֏", "10000֏", "20000֏", "100000֏"],
        images: {
        
            "1000֏": { front: "https://example.com/usd-2-front.jpg", back: "https://example.com/usd-2-back.jpg" },
            "5000֏": { front: "https://example.com/usd-5-front.jpg", back: "https://example.com/usd-5-back.jpg" },
            "10000֏": { front: "https://example.com/usd-10-front.jpg", back: "https://example.com/usd-10-back.jpg" },
            "20000֏": { front: "https://example.com/usd-20-front.jpg", back: "https://example.com/usd-20-back.jpg" },
            "100000֏": { front: "https://example.com/usd-100-front.jpg", back: "https://example.com/usd-100-back.jpg" }
        }
    },
};

const currencyFrontImage = document.getElementById("currencyFrontImage");
const currencyBackImage = document.getElementById("currencyBackImage");

denominationDropdown.addEventListener("change", function () {
    const selectedCurrency = currencyDropdown.value;
    const selectedDenomination = denominationDropdown.value;

    if (selectedCurrency && selectedDenomination && currencyData[selectedCurrency].images[selectedDenomination]) {
        // Update and display both the front and back images
        currencyFrontImage.src = currencyData[selectedCurrency].images[selectedDenomination].front;
        currencyBackImage.src = currencyData[selectedCurrency].images[selectedDenomination].back;
        
        currencyFrontImage.style.display = "block";
        currencyBackImage.style.display = "block";
    } else {
        // Hide the images if no valid selection
        currencyFrontImage.style.display = "none";
        currencyBackImage.style.display = "none";
        currencyFrontImage.src = "";
        currencyBackImage.src = "";
    }
});




// Get modal and link elements
var countryRemitenceModal = document.getElementById("countryRemitenceInfoModal");
var countryRemitenceBtn = document.getElementById("countryRemitenceBtn");
var closeModalBtn = document.querySelector(".close-btn");

// Get country, currency message, and product dropdowns
var countrySelect = document.getElementById("countrySelect");
var currencyMessage = document.getElementById("currencyMessage");
var productDropdown = document.getElementById("productDropdown");

// When the user clicks the link, open the modal
countryRemitenceBtn.onclick = function(event) {
    event.preventDefault(); // Prevent the default link behavior
    countryRemitenceModal.style.display = "block"; // Show the modal
}

// When the user clicks on <span> (x), close the modal
closeModalBtn.onclick = function() {
    countryRemitenceModal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target === countryRemitenceModal) {
        countryRemitenceModal.style.display = "none";
    }
}

// When the country is selected, automatically show the message for currency and enable product dropdown
countrySelect.onchange = function() {
    var selectedCountry = countrySelect.value;
    
    if (selectedCountry === "India") {
        currencyMessage.textContent = "Currency: INR (Indian Rupee)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Philippines") {
        currencyMessage.textContent = "Currency: PHP (PESO)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Bangladesh") {
        currencyMessage.textContent = "Currency: BDT (Bangladeshi Taka)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Pakistan") {
        currencyMessage.textContent = "Currency: PKR (Pakistani Rupee)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "United Kingdom") {
        currencyMessage.textContent = "Currency: GBP (Great Britain Pound)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "USA") {
        currencyMessage.textContent = "Currency: USD (US Dollar)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Australia") {
        currencyMessage.textContent = "Currency: AUD (Australian Dollar)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Bahrain") {
        currencyMessage.textContent = "Currency: BHD (Bahraini Dinar)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Canada") {
        currencyMessage.textContent = "Currency: CAD (Canadian Dollar)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "China") {
        currencyMessage.textContent = "Currency: CNY (Renminbi)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Denmark") {
        currencyMessage.textContent = "Currency: DKK (Danish Krone)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Egypt") {
        currencyMessage.textContent = "Currency: EGP (Egyptian Pound)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Europe") {
        currencyMessage.textContent = "Currency: Euro (EURO)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Sri Lanka") {
        currencyMessage.textContent = "Currency: LKR (Sri Lankan Rupee)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Thailand") {
        currencyMessage.textContent = "Currency: THB (Thai Baht)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Hong Kong") {
        currencyMessage.textContent = "Currency: HKD (Hong Kong Dollar)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Indonesia") {
        currencyMessage.textContent = "Currency: IDR Rp (Indonesian Rupiah)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Jordan") {
        currencyMessage.textContent = "Currency: JOD (Jordanian Dinar)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Kuwait") {
        currencyMessage.textContent = "Currency: KWD (Kuwaiti Dinar)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Malaysia") {
        currencyMessage.textContent = "Currency: MYR (Malaysian Ringgit)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Nepal") {
        currencyMessage.textContent = "Currency: NPR (Nepalese Rupee)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "New Zealand") {
        currencyMessage.textContent = "Currency: NZD (New Zealand Dollar)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Norway") {
        currencyMessage.textContent = "Currency: NOK (Norwegian Krone)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Oman") {
        currencyMessage.textContent = "Currency: OMR (Omani Riyal)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Qatar") {
        currencyMessage.textContent = "Currency: QAR (Qatari Riyal)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Saudi Arabia") {
        currencyMessage.textContent = "Currency: SAR (Saudi Riyal)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Singapore") {
        currencyMessage.textContent = "Currency: SGD (Singapore Dollar)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "South Africa") {
        currencyMessage.textContent = "Currency: ZAR (South African Rand)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Switzerland") {
        currencyMessage.textContent = "Currency: CHF (Swiss Franc)";
        productDropdown.disabled = false;
    } else if (selectedCountry === "Sweden") {
        currencyMessage.textContent = "Currency: SEK (Swedish Krona)";
        productDropdown.disabled = false;
    } else {
        currencyMessage.textContent = "";
        productDropdown.disabled = true; // Disable product dropdown if no country is selected
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const productDropdown = document.getElementById("productDropdown");
    const disbursalModeSelect = document.getElementById("disbursalModeSelect");
    const disbursalMessage = document.getElementById("disbursalMessage");
    const countrySelect = document.getElementById("countrySelect");

    // Product options for India
    const indiaProducts = [
        "Axis Bank",
        "Canara Bank",
        "Federal Bank",
        "HDFC Bank",
        "ICICI Bank",
        "IDBI Bank",
        "Indian OverSeas Bank DD",
        "Indian OverSeas Bank TT",
        "INDUS IND",
        "Punjab National Bank DD",
        "Punjab National Bank TT",
        "State Bank Of India"
    ];

    // Product options for the Philippines
    const philippinesProducts = ['AUB', 'BANCO DEOPO', 'BPI', 'IREMIT','METRO BANK', 'RCBC'];

    const BangladeshiProducts = ['AGRANI BANK LTD', 'BANGLADESH KRISHI BANK LTD', 'BANK ASIA LTD', 'BRAC BANK LTD', 'DUTCH BANGLA BANK LTD', 'ISLAMIC BANK BANGLADESH LTD', 'NATIONAL BANK LTD','UNITED COMMERCIAL BANK LTD','UTTARA BANK LTD'];

    const  PakistaniProducts = ['National Bank Of Pakistan', 'Summit'];

    const UnitedKingdomProducts = ['Lotus London -TT', 'SCB-Swift'];

    const USAProducts = ['DEUTSCHE BANK-SWIFT', 'SCB.NY-SWIFT'];

    const AustraliaProducts = ['Lotus Australia-TT','SCB-AUD Fax'];

    const BahrainProducts = ['Nanoo Exchange-TT', 'SCB -Fax'];

    const CanadaProducts = ['SCB.DUBAI--FAX'];

    const ChinaProducts = ['Crown Exchange-TT'];

    const DenmarkProducts = ['scb.-fax'];

    const EgyptProducts = ['BANQUE MISR-TT'];

    const EuropeProducts = ['SCB.Newyork-Swift'];

    const HongkongProducts = ['Lotus HongKong-TT'];

    const IndonasiaProducts = ['BANK NEGARA INDONASIA SWIFT'];

    const JordanProducts = ['SCB-FaX....'];

    const KuwaitProducts = ['AL Zamil Exchange TT', 'SCB- FAX'];

    const MalaysiaProducts = ['Lotus Malaysia TT'];

    const NepalProducts = ['Himalayan Bank TT'];

    const NewZealandProducts = ['SCB.DUBAI--FAX...'];

    const Norwayproducts = ['SCB-  Fax..'];

    const OMANProducts = ['Leela Megh Exchange TT'];

    const QATARproducts = ['ALDAR Exchange TT', 'SCB-Fax'];

    const SaudiArabiaProducts = ['scb--fax'];

    const SingaporeProducts = ['Crown-Exchange TT', 'SCB-  Fax'];

    const SouthAfricaProducts = ['SCB.DUBAI -FAX'];

    const SriLankaProducts = ['BANK OF CEYLON', 'COMMERCIAL BANK OF CEYLON', 'HATTON NATIONAL BANK'];

    const SwitzerlandProducts = ['SCB.Dubai-fax'];

    const ThailandProducts = ['Asma Exchange-TT'];

    const SwedenProducts = ['SCB-fAX'];

    
    
    const disbursalModes = {
        "Axis Bank": ["NEFT", "RTGS", "Direct Credit"],
        "Canara Bank": ["Direct Credit"],
        "Federal Bank": ["NEFT", "RTGS", "Direct Credit"],
        "HDFC Bank": ["Direct Credit"],
        "ICICI Bank": ["NEFT", "RTGS", "INSTA TRANSFER"],
        "IDBI Bank": ["NEFT", "RTGS", "Direct Credit"],
        "Indian OverSeas Bank DD": ["Indian OverSeas Bank DD"],
        "Indian OverSeas Bank TT": ["Indian OverSeas Bank TT"],
        "INDUS IND": ["NEFT", "RTGS", "Direct Credit"],
        "Punjab National Bank DD": ["Punjab National Bank DD"],
        "Punjab National Bank TT": ["Direct Credit"],
        "State Bank Of India": ["Direct Credit"],
        
        "AUB": ["AUB Cash Pick Up", "CLH/MLH/Palawan", "Deposit To Other Banks", "Door To Door Province","Door To Door Manila", "Door To Door Remote Area", "PHP Direct Deposit"],
        "BANCO DEOPO": ["Cash Pick Up Anywhere", "Direct Bank", "Door To Door Province", "Door To Door Remote Area", "Door To Door Metro Manila","OTHER BANK","Thru CLH/MLH Pick Up Anywhere"],
        "BPI": ["Cash Pick Up", "Direct Bank", "Door To Door Manila", "Door To Door Province", "Other Bank", "SBA/ Property Payment", "CLH,MLH, One Network Cash Pick Up"],
        "IREMIT": ["Allied Bank Cash Pick Up", "Bancode oro cash pick up", "Bank Transfer", "BPI Cash Pick Up", "Door To Door Manila", "Door To Door Province", "Door To Door Remote Area", "Notify & Pay CLH/MLH", "PALAWAN PAWNSHOP", "PSBank Cash Pick UP"],
        "METRO BANK": ["cebuana/Mlhuilier Pick Up anywhere", "Direct Bank", "Door To Door Province", "Door To Door Remote Area", "LBC Pick Up Anywhere", "Metro Bank Cash Pick Up PHP","Other Bank","PALAWAN Pick Up Anywhere","PS Bank Pick UP"],
        "RCBC": ["Cash Pick Up Thru RCBC PHP", "Cebuana Cash Pick Up", "Deposit to other bank", "Door to Door Metro Manila", "Door to Door Province", "Door to Door remote access","GCASH remit cash pickup","GPRS all in cash pick up", "LBC all in cash pick up", "Mlhuiller cash pick up", "SBA/Propety payment"],
    
        "AGRANI BANK LTD":["Cash Pick", "Direct A/C Credit"],
        "BANGLADESH KRISHI BANK LTD":["Direct A/C Credit"],
        "BRAC BANK LTD": ["Cash Pick", "Direct A/C Credit","BKASH A/C Credit"],
        "BANK ASIA LTD" : ["Cash Pick", "Direct A/C Credit", "Other Bank A/C Credit"],
        "DUTCH BANGLA BANK LTD" : ["Cash Pick", "DBBL Mobile Banking A/C Credit", "Direct A/C Credit", "Other Banks A/C Credit"],
        "ISLAMIC BANK BANGLADESH LTD" : ["Cash Pick", "Direct A/C Credit"],
        "NATIONAL BANK LTD" : ["Cash Pick", "Direct A/C Credit"],
        "UNITED COMMERCIAL BANK" : ["Cash Pick", "Direct A/C Credit"],
        "UTTARA BANK LTD" : ["Cash Pick", "Direct A/C Credit"], 

        "National Bank Of Pakistan" : ["NBP BANK Direct Deposit", "NBP Cash Pick UP", "Other Bank"],
        "Summit" : ["Other Bank", "Summit Bank Direct Deposit", "Summit/Allied Cash Pick UP"],
 
        "Lotus London -TT" : ["BANK TRANSFER"],
        "SCB-Swift" : ["BANK TRANSFER"],

        "DEUTSCHE BANK-SWIFT" : ["BANK TRANSFER"],
        "SCB.NY-SWIFT" : ["BANK TRANSFER"],

        "Lotus Australia-TT" : ["BANK TRANSFER"],
        "SCB-AUD Fax" : ["BANK TRANSFER"],

        "Nanoo Exchange-TT" : ["BANK TRANSFER", "CASH PICK-UP"],

        "SCB -Fax" : ["BANK TRANSFER"],

        "Crown Exchange-TT" : ["BANK TRANSFER", "CASH PICK-UP"],

        "SCB.DUBAI--FAX" : ["BANK TRANSFER"],

        "scb.-fax" : ["BANK TRANSFER"],

        "BANQUE MISR-TT" : ["BANK TO BANK", "CASH PICK UP"],

        "SCB.Newyork-Swift" : ["BANK TRANSFER"],

        "Lotus HongKong-TT" : ["BANK TRANSFER"],

        "BANK NEGARA INDONASIA SWIFT" : ["BANK TRANSFER"],

        "SCB-FAX" : ["BANK TRANSFER"],

        "AL Zamil Exchange TT" : ["BANK TRANSFER", "CASH PICK-UP"],

        "SCB- FAX" : ["BANK TRANSFER"],

        "Lotus Malaysia TT" : ["BANK TRANSFER"],

        "Himalayan Bank TT" : ["CASH PICK-UP", "DIRECT BANK", "OTHER BANK"],

        "SCB.DUBAI-FAX" : ["BANK TRANSFER"],

        "SCB-Fax" : ["BANK TRANSFER"],
        
        "Leela Megh Exchange TT" : ["BANK TRANSFER", "CASH PICK-UP"],

        "ALDAR Exchange TT" : ["BANK TRANFER", "CASH PICK-UP"],

        "SCB-  Fax" : ["BANK TRANSFER"],

        "SCB-  Fax" : ["BANK TRANSFER"],


        "scb--fax" : ["N/A"],

        "SCB-FaX" : ["BANK TRANSFER"],

        "BANK OF CEYLON" : ['BANK TO BANK/OTHER BANK', 'CASH PICK-UP'],

        "COMMERCIAL BANK OF CEYLON" : ['ACCOUNTS TRANSFER', 'CASH PICK-UP', 'OTHER BANK A/C'],

        "HATTON NATIONAL BANK" : ['BANK TO BANK', 'CASH PICK UP'],

        "Asma Exchange-TT" : ['BANK TRANSFER', 'CASH PICK UP'],

        "Crown-Exchange TT" : ['BANK TRANSFER', 'CASH PICK UP'],

        "SCB.DUBAI -FAX" : ['BANK TRANSFER'],

        "SCB.Dubai-fax" : ['BANK TRANSFER'],

        "SCB-fAX" : ['BANK TRANSFER.'],

        "SCB-  Fax.." : ['BANK TRANSFER'],

        "SCB.DUBAI--FAX..." : ['BANK TRANSFER'],

        "SCB-FaX...." : ['BANK TRANSFER'],

    };


    
    countrySelect.addEventListener("change", function () {
        const selectedCountry = countrySelect.value;

        if (selectedCountry === "India") {
            productDropdown.disabled = false;
            
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            indiaProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
        } else if (selectedCountry === "Philippines") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            philippinesProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        }  else if (selectedCountry === "Bangaldesh") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            BangladeshiProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 

        else if (selectedCountry === "Pakistan") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            PakistaniProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "United Kingdom") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            UnitedKingdomProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 

        else if (selectedCountry === "USA") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            USAProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Australia") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            AustraliaProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Bahrain") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            BahrainProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Canada") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            CanadaProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 

        else if (selectedCountry === "China") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            ChinaProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        
        else if (selectedCountry === "Denmark") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            DenmarkProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Egypt") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            EgyptProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Europe") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            EuropeProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Hong Kong") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            HongkongProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Indonasia") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            IndonasiaProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Jordan") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            JordanProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Kuwait") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            KuwaitProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Malaysia") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            MalaysiaProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Nepal") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            NepalProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "New Zealand") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            NewZealandProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Norway") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            Norwayproducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "OMAN") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            OMANProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "QATAR") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            QATARproducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Saudi Arabia") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            SaudiArabiaProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 

        else if (selectedCountry === "Singapore") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            SingaporeProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 

        else if (selectedCountry === "South Africa") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            SouthAfricaProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        }

        else if (selectedCountry === "Sri Lanka") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            SriLankaProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Switzerland") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            SwitzerlandProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Thailand") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            ThailandProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 
        else if (selectedCountry === "Sweden") {
            productDropdown.disabled = false;
            // Clear and populate product dropdown with Philippines products
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            SwedenProducts.forEach(product => {
                const option = document.createElement("option");
                option.value = product;
                option.textContent = product;
                productDropdown.appendChild(option);
            });
            
        } 

        else {
            productDropdown.disabled = true;
            disbursalModeSelect.disabled = true;
            productDropdown.innerHTML = '<option value="">-- Select Product --</option>';
            disbursalModeSelect.innerHTML = '<option value="">-- Select Disbursal Mode --</option>';
            disbursalMessage.textContent = ""; // Clear the message
        }
    });

    // Populate disbursal mode dropdown based on selected product
    productDropdown.addEventListener("change", function () {
        const selectedProduct = productDropdown.value;

        // Enable the disbursal mode dropdown if a product is selected
        if (selectedProduct && disbursalModes[selectedProduct]) {
            disbursalModeSelect.disabled = false;
            disbursalModeSelect.innerHTML = '<option value="">-- Select Disbursal Mode --</option>';

            // Populate the disbursal mode options based on the selected product
            disbursalModes[selectedProduct].forEach(mode => {
                const option = document.createElement("option");
                option.value = mode;
                option.textContent = mode;
                disbursalModeSelect.appendChild(option);
            });

            // Clear the disbursal message
            disbursalMessage.textContent = "";
        } else {
            disbursalModeSelect.disabled = true;
            disbursalModeSelect.innerHTML = '<option value="">-- Select Disbursal Mode --</option>';
            disbursalMessage.textContent = ""; // Clear the message
        }
    });
});
    // Display message based on selected disbursal mode
    disbursalModeSelect.addEventListener("change", function () {
        const selectedProduct = productDropdown.value;
        const selectedDisbursalMode = disbursalModeSelect.value;

        if (selectedProduct === "Axis Bank" && selectedDisbursalMode === "Direct Credit") {
            disbursalMessage.innerHTML = 
                "TRANSACTION AMOUNT UPTO AED 1000 - " +
                "TT CHARGES IS 15<br><br>" + 
                "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
                "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
                "SPECIAL TIPS : AXIS TO AXIS A/C CREDIT ONLY, 15 DIGITS A/C NO. REQUIRED<br><br>" +
                "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
                "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>" + 
                "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"
        }
        
       else if (selectedProduct === "Axis Bank" && selectedDisbursalMode === "NEFT") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BELOW INR 200,000<br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>" +

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }

        else if (selectedProduct === "Axis Bank" && selectedDisbursalMode === "RTGS") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : 200,000 AND ABOVE <br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>" + 

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "Canara Bank" && selectedDisbursalMode === "Direct Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : CANARA TO CANARA A/C CREDIT ONLY, 13 DIGITS A/C NO. REQUIRED <br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>" + 

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "Federal Bank" && selectedDisbursalMode === "Direct Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : FEDERAL TO FEDERAL A/C CREDIT ONLY <br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>" + 

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "Federal Bank" && selectedDisbursalMode === "NEFT") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : ALL TRADE TXNS SHOULD ROUTE THROUGH FED ONLY, TRADE TXN LIMIT UPTO 1,500,000 INR <br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>" +
            
            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "Federal Bank" && selectedDisbursalMode === "RTGS") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : ALL TRADE TXNS SHOULD ROUTE THROUGH FED ONLY, TRADE TXN LIMIT UPTO 1,500,000 INR <br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>" + 

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }

        else if (selectedProduct === "HDFC Bank" && selectedDisbursalMode === "Direct Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : HDFC TO HDFC A/C CREDIT ONLY, 14 DIGITS A/C NO. REQUIRED<br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>"+

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "HDFC Bank" && selectedDisbursalMode === "RTGS") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : 200,000 AND ABOVE<br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>"+

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "HDFC Bank" && selectedDisbursalMode === "NEFT") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BELOW INR 200,000<br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>"+

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "ICICI Bank" && selectedDisbursalMode === "INSTA TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : ICICI TO ICICI A/C CREDIT ONLY, 12 DIGITS A/C NO. REQUIRED<br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>"+

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "ICICI Bank" && selectedDisbursalMode === "NEFT") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BELOW INR 200,000<br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>" +

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "ICICI Bank" && selectedDisbursalMode === "RTGS") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : 200,000 AND ABOVE<br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>"+

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "IDBI Bank" && selectedDisbursalMode === "Direct Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : IDBI TO IDBI A/C CREDIT ONLY<br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>"+

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "IDBI Bank" && selectedDisbursalMode === "NEFT") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BELOW INR 200,000 <br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>" +

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "IDBI Bank" && selectedDisbursalMode === "RTGS") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTION ABOVE AED 1000 - TT CHARGES IS 20<br><br>" + 
            "VALUE DATE IS NEXT WORKING DAY..NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : 200,000 AND ABOVE<br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME.<br><br>"+

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "Indian OverSeas Bank DD" && selectedDisbursalMode === "Indian OverSeas Bank DD") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO INR 500,000 - " +
            "TT CHARGES IS 5<br><br>" +  
            "VALUE DATE - N/A...NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : DD VALID THREE MONTHS FROM ISSUE DATE<br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME ONLY NEED FOR OPEN DD, <br><br>"+

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "Indian OverSeas Bank TT" && selectedDisbursalMode === "Indian OverSeas Bank TT") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTIONS ABOVE AED 1000 TT CHARGES IS 20<br><br>"  +
            "VALUE DATE - NEXT WORKING DAY...NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : DD VALID THREE MONTHS FROM ISSUE DATE<br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME. <br><br>"+

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "INDUS IND" && selectedDisbursalMode === "Direct Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTIONS ABOVE AED 1000 TT CHARGES IS 20<br><br>"  +
            "VALUE DATE - NEXT WORKING DAY...NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : INDUSIND TO INDUSIND A/C CREDIT ONLY<br><br>" +
            "SPECIAL REMARKS : COOPERATIVE BANKS, SPECIAL CHARACTERS IN AC NO, CORPORATION BANK SMALL DIGIT A/C NOS. (Eg: SB01000000) No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc..<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME. <br><br>"+

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "INDUS IND" && selectedDisbursalMode === "NEFT") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTIONS ABOVE AED 1000 TT CHARGES IS 20<br><br>"  +
            "VALUE DATE - NEXT WORKING DAY...NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BELOW INR 200,000<br><br>" +
            "SPECIAL REMARKS : COOPERATIVE BANKS, SPECIAL CHARACTERS IN AC NO, CORPORATION BANK SMALL DIGIT A/C NOS. (Eg: SB01000000) No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME. <br><br>"+

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "INDUS IND" && selectedDisbursalMode === "RTGS") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 - " +
            "TT CHARGES IS 15<br><br>" + 
            "FOR TRANSACTIONS ABOVE AED 1000 TT CHARGES IS 20<br><br>"  +
            "VALUE DATE - NEXT WORKING DAY...NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : ABOVE INR 200,000<br><br>" +
            "SPECIAL REMARKS : COOPERATIVE BANKS, SPECIAL CHARACTERS IN AC NO, CORPORATION BANK SMALL DIGIT A/C NOS. (Eg: SB01000000) No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME. <br><br>"+

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }


        else if (selectedProduct === "Punjab National Bank DD" && selectedDisbursalMode === "Punjab National Bank DD") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT PERSONAL MAX 900,000.TRADE 500,000- " +
            "CHARGE IS 5<br><br>" + 
             
            "VALUE DATE - N/A...NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : DD VALID THREE MONTHS FROM ISSUE DATE<br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc..<br><br>" +
            "MANDATORY FIELDS : BNF NAME ONLY NEED FOR OPEN DD, <br><br>"+

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }
        else if (selectedProduct === "Punjab National Bank TT" && selectedDisbursalMode === "Direct Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT AED UPTO 1000- " +
            "TT CHARGE IS 15<br><br>" + 
             "FOR TRANSACTIONS ABOVE AED 1000 TT CHARGE IS 20<br>"+
            "VALUE DATE - N/A...NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : PNB TO PNB A/C CREDIT ONLY, 16 DIGITS A/C NO REQUIRED<br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME ONLY NEED FOR OPEN DD, <br><br>"+

            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

    
        }

        else if (selectedProduct === "State Bank Of India" && selectedDisbursalMode === "Direct Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT AED UPTO 1000- " +
            "TT CHARGE IS 15<br><br>" + 
             "FOR TRANSACTIONS ABOVE AED 1000 TT CHARGE IS 20"+
            "VALUE DATE - N/A...NO BACKEND CHARGES.<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : SBI TO SBI A/C CREDIT ONLY, 11 DIGITS A/C NO. REQUIRED<br><br>" +
            "SPECIAL REMARKS : SBI ACCOUNT NO STARTING DIGIT = (1,2 OR 3) STATE BANK OF INDORE A/C NO STARTING = (53 OR 63) STATE BANK OF SAURASHTRA A/C STARTING = (56 OR 66) No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc.<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM, IFSC/ BRANCH NAME. <br><br>" +
    
            "REMARKS FOR INDIA : <br>INDIA - TT - If any trade related or commercial purpose transactions please route through Federal bank DIRECT/NEFT/RTGS only. (Maximum Limit of RTGS INR 500,000/ per transaction). <br >If any transactions like as Property Purchase, Education Expenses Travelling  Expenses, Medical Expenses please route through Federal Bank DIRECT/NEFT/RTGS only. <br>If any Corporation Bank small digit account number transactions (like as SB01000000) and all Co-operative Bank transactions please route through INDUSIND NEFT/RTGS only. <br>If person/company to person  transactions  purpose should be “FAMILY MAINTENANCE”, don’t put any trade related or other purposes. <br><br> INDIA - DD Indian Overseas Bank DD’s family maintenance transactions maximum limit up to INR 500,000/ per Draft. Punjab National Bank DD’s family maintenance transactions maximum limit below INR 1,000,000/ per Draft. <br> If any Trade related, Travelling Expenses, Education Expenses Demand Drafts, please route through Punjab National Bank. (Maximum Limit of per Draft is INR 500,000/-) Property Purchases  Demand Drafts, please route through Punjab National Bank. <br>Punjab National Bank DD’s family maintenance transactions maximum limit 900,000 INR per Draft"

        }

        else if (selectedProduct === "AUB" && selectedDisbursalMode === "AUB Cash Pick Up") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - No CAP LIMIT - " +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 days...-"+ "BACKEND CHARGES - 125<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : AUB TO AUB cash pick up PHP<br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF Mobile Number. <br><br>"+

            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
        }
        else if (selectedProduct === "AUB" && selectedDisbursalMode === "CLH/MLH/Palawan") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - PHP 50,000.00 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 days...- "+ "BACKEND CHARGES - 125<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : AUB TO CLH/MLH CASH PICK UP ANYWHERE <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF Mobile Number. <br><br>" + 

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }


        else if (selectedProduct === "AUB" && selectedDisbursalMode === "Deposit To Other Banks") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 t0 250,000 - " +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 days...- "+ "BACKEND CHARGES - 85<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : AUB TO OTHER BANK PHP <br><br>" +
            "SPECIAL REMARKS : 500,000 ABOVE AML NEEDED <br><br>" +
            "MANDATORY FIELDS : ACCOUNT NAME, ACCOUNT NUMBER, BANK NAME,CITY <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "AUB" && selectedDisbursalMode === "Door To Door Manila") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - PHP 250,000.00 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 days...-"+ "BACKEND CHARGES - 150<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : AUB TO Door To Door Manila <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BENE NAME/ BENE CONTACT NUMBER/ FUL BENE ADD. + ZIP CODE <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "AUB" && selectedDisbursalMode === "Door To Door Province") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - PHP 150,000.00 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 2-3 days...-"+ "BACKEND CHARGES - 250<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : AUB TO DOOR TO DOOR PROVINCE <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BENE NAME/ BENE CONTACT NUMBER/ FUL BENE ADD. + ZIP CODE <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        
        else if (selectedProduct === "AUB" && selectedDisbursalMode === "Door To Door Remote Area") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - PHP 150,000.00 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 2-3 days...-"+ "BACKEND CHARGES - 250<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : AUB TO DOOR TO DOOR PROVINCE REMOTE AREA <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BENE NAME/ BENE CONTACT NUMBER/ FUL BENE ADD. + ZIP CODE <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "AUB" && selectedDisbursalMode === "PHP Direct Deposit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - NO CAP LIMIT -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 days...-"+ "BACKEND CHARGES - 65<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : AUB TO AUB PHP <br><br>" +
            "SPECIAL REMARKS : 500,000 AND ABOVE AML REQUIRED <br><br>" +
            "MANDATORY FIELDS : ACC.NAME, ACC.NUM, BANK NAME, CITY <br><br>"+
            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "BANCO DEOPO" && selectedDisbursalMode === "Cash Pick Up Anywhere") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - NO CAP LIMIT -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 HRS AFTER UPLOADING...-"+ "BACKEND CHARGES - 120<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BDO TO BDO CASH PICK UP PHP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "BANCO DEOPO" && selectedDisbursalMode === "Direct Bank") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - NO CAP LIMIT -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 HRS AFTER UPLOADING...-"+ "BACKEND CHARGES - 100<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BDO TO BDO PHP <br><br>" +
            "SPECIAL REMARKS : 500,000 ABOVE AML NEEDED <br><br>" +
            "MANDATORY FIELDS : ACCOUNT NAME, A/C NUM, BANK NAME, CITY <br><br>" +

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "BANCO DEOPO" && selectedDisbursalMode === "Door To Door Province") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 2-3 DAYS...-"+ "BACKEND CHARGES - 200<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BDO DOOR TO DOOR PROVINCE<br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNE CONTACT NO. BENE COMPLETE ADD.CITY, ZIP CODE <br><br>" +

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "BANCO DEOPO" && selectedDisbursalMode === "Door To Door Remote Area") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 4-5 DAYS...-"+ "BACKEND CHARGES - 200<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BDO TO DOOR TO DOOR PROVINCE REMOTE <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNE CONTACT NO. BENE COMPLETE ADD.CITY, ZIP CODE  <br><br>" + 

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "BANCO DEOPO" && selectedDisbursalMode === "Door To Door Metro Manila") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 - " +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 150<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BDO DOOR TO DOOR MANILA <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNE CONTACT NO. BENE COMPLETE ADD.CITY, ZIP CODE <br><br>"+
            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "BANCO DEOPO" && selectedDisbursalMode === "Other Bank") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - NO CAP LIMIT -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 WORKING DAYS...-"+ "BACKEND CHARGES - 150<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BDO TO OTHER BANK PHP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : A/C NAME, A/C NUM, BANK NAME, CITY <br><br>" +

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "BANCO DEOPO" && selectedDisbursalMode === "Thru CLH/MLH Pick Up Anywhere") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 50,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 140<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BDO TO CLH/MLH CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "BPI" && selectedDisbursalMode === "Cash Pick Up") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - NO CAP LIMIT -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 HRS AFTER UPLOADING...-"+ "BACKEND CHARGES - 120<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BPI TO BPI CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "BPI" && selectedDisbursalMode === "Direct Bank") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - NP CAP LIMIT -"  +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - WITH IN 24 HOURS...-"+ "BACKEND CHARGES - 100<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BPI TO BPI PHP<br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : ACCOUNT NAME,A/C NUM, BANK NAME, CITY <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "BPI" && selectedDisbursalMode === "Door To Door Manila") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 50,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 140<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BDO TO CLH/MLH CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br>"+
            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "BPI" && selectedDisbursalMode === "Door To Door Province") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 2-3 DAYS...-"+ "BACKEND CHARGES - 140<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BPI TO DOOR TO DOOR PROVINCE <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS :  BNF NAME,BENE CONTACT NO.,BENE COMPLETE ADD. CITY,ZIP CODE <br><br>"+
            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "BPI" && selectedDisbursalMode === "Other Bank") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - NO CAP LIMIT - " +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 120<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BDO TO OTHER BANK <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : ACC NAME, ACC NUM, BANK NAME, CITY <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "BPI" && selectedDisbursalMode === "SBA/ Property Payment") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - NO CAP LIMIT -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 BANKING DAYS..-"+ "BACKEND CHARGES - 100<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : HOUSING LAND NAME, POLICY NUMBER <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : HOUSING LAND NAME, POLICY NUMBER <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "BPI" && selectedDisbursalMode === "CLH,MLH, One Network Cash Pick Up") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 140<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BPI TO CLH/MLH CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+
            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "IREMIT" && selectedDisbursalMode === "Allied Bank Cash Pick Up") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 140<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BPI TO CLH/MLH CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "IREMIT" && selectedDisbursalMode === "Bancode oro cash pick up") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 140<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BPI TO CLH/MLH CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "IREMIT" && selectedDisbursalMode === "Bank Transfer") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 130<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : IREMIT TO  NOTIFY AND PAY <br><br>" +
            "SPECIAL REMARKS : 500,000 ABOVE NEED RIF & RAF (IREMIT AML FORM) <br><br>" +
            "MANDATORY FIELDS : IREMIT AML / PAYSLIP/SALARY CERT/WITHDRAWALSLIP / VALID ID <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "IREMIT" && selectedDisbursalMode === "BPI Cash Pick Up") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 - " +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - WITH IN 24 HOURS...-"+ "BACKEND CHARGES - 130<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : IREMIT TO  NOTIFY AND PAY <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM<br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "IREMIT" && selectedDisbursalMode === " Door To Door Manila") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 200,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 2-3 DAYS...-"+ "BACKEND CHARGES - 100<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : IREMIT TO DOOR TO DOOR MANILA <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME,BENE CONTACT NO.,BENE COMPLETE ADD. CITY,ZIP CODE <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "IREMIT" && selectedDisbursalMode === "Door To Door Province") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 150<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : IREMIT TO DOOR TO DOOR PROVINCE <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME,BENE CONTACT NO.,BENE COMPLETE ADD. CITY,ZIP CODE <br><br>"+
            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "IREMIT" && selectedDisbursalMode === "Door To Door Remote Area") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 200,000 -"  +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 3-5 DAYS...-"+ "BACKEND CHARGES - 150<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : IREMIT TO DOOR TO DOOR PROVINCE REMOTE AREA <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME,BENE CONTACT NO.,BENE COMPLETE ADD. CITY,ZIP CODE <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "IREMIT" && selectedDisbursalMode === "Notify & Pay CLH/MLH") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 50,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 30 Mins To 1 Hours...-"+ "BACKEND CHARGES - 130<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : IREMIT TO  NOTIFY AND PAY <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "IREMIT" && selectedDisbursalMode === "PALAWAN PAWNSHOP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 75,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - WITH IN 24 HOURS...-"+ "BACKEND CHARGES - 130<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : IREMIT TO  NOTIFY AND PAY <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "IREMIT" && selectedDisbursalMode === "PSBank Cash Pick UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - WITH IN 24 HOURS...-"+ "BACKEND CHARGES - 130<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : IREMIT TO  NOTIFY AND PAY <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+
            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }





        else if (selectedProduct === "METRO BANK" && selectedDisbursalMode === "cebuana/Mlhuilier Pick Up anywhere") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 50,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - WITH IN 24 HOURS AFTER UPLOADING...-"+ "BACKEND CHARGES - 120<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : METROBANK TO CASH PICK UP ANYWHERE <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+
            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "METRO BANK" && selectedDisbursalMode === "Direct Bank") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - NO CAP LIMIT -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - WITH IN 12 HOURS...-"+ "BACKEND CHARGES - 100<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : METROBANK TO METROBANK PHP <br><br>" +
            "SPECIAL REMARKS : 500,000 ABOVE AML NEEDED / VALID ID <br><br>" +
            "MANDATORY FIELDS : ACCOUNT NAME,A/C NUM, BANK NAME, CITY <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "METRO BANK" && selectedDisbursalMode === "Door To Door Province") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 140<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BPI TO CLH/MLH CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "METRO BANK" && selectedDisbursalMode === "Door To Door Remote Area") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 300,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 2-3 DAYS...-"+ "BACKEND CHARGES - 160<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : METROBANK TO DOOR TO DOOR PROVINCE <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME,BENE CONTACT NO.,BENE COMPLETE ADD. CITY,ZIP CODE<br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "METRO BANK" && selectedDisbursalMode === "LBC Pick Up Anywhere") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 100,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - WITH IN 24 HOURS...-"+ "BACKEND CHARGES - 120<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : METROBANK TO CASH PICK UP ANYWHERE <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM<br><br>"+
            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "METRO BANK" && selectedDisbursalMode === "Metro Bank Cash Pick Up PHP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 300,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 110<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : METROBANK TO DOOR TO DOOR MANILA <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME,BENE CONTACT NO.,BENE COMPLETE ADD. CITY,ZIP CODE<br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "METRO BANK" && selectedDisbursalMode === "Other Bank") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - NO CAP LIMIT -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...-"+ "BACKEND CHARGES - 120<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : METROBANK TO OTHER BANK PHP <br><br>" +
            "SPECIAL REMARKS : 500,000 ABOVE AML NEEDED / VALID ID <br><br>" +
            "MANDATORY FIELDS : ACCOUNT NAME,A/C NUM, BANK NAME, CITY<br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "METRO BANK" && selectedDisbursalMode === "PALAWAN Pick Up Anywhere") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 50,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE -  WITH IN 24 HOURS AFTER UPLOADING...-"+ "BACKEND CHARGES - 120<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : METROBANK TO CASH PICK UP ANYWHERE<br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "METRO BANK" && selectedDisbursalMode === "PS Bank Pick UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 250,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - WITH IN 24 HOURS AFTER UPLOADING...-"+ "BACKEND CHARGES - 120<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BPI TO CLH/MLH CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }



        else if (selectedProduct === "RCBC" && selectedDisbursalMode === "Cash Pick Up Thru RCBC PHP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - NO CAP LIMIT -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 150<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : RCBC TO RCBC CASH PICK UP PHP <br><br>" +
            "SPECIAL REMARKS : 500,000 ABOVE AML / VALID ID/PAYSLIP/WITHDRAWALSLIP <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "RCBC" && selectedDisbursalMode === "Cebuana Cash Pick Up") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 140<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BPI TO CLH/MLH CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }

        else if (selectedProduct === "RCBC" && selectedDisbursalMode === "Deposit to other bank") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 140<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BPI TO CLH/MLH CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "RCBC" && selectedDisbursalMode === "Door to Door Metro Manila") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 30,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS..-"+ "BACKEND CHARGES - 200<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : RCBC TO CEBUANA CASH PICK UP ANYWHERE<br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
    
    
        }
        else if (selectedProduct === "RCBC" && selectedDisbursalMode === "Door to Door Province") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 140<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BPI TO CLH/MLH CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
        
        }
        else if (selectedProduct === "RCBC" && selectedDisbursalMode === "Door to Door remote access") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - NO CAP LIMIT -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 150<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : RCBC TO OTHER BANK PHP <br><br>" +
            "SPECIAL REMARKS : 500,000 ABOVE AML / VALID ID/PAYSLIP/WITHDRAWALSLIP <br><br>" +
            "MANDATORY FIELDS : ACCOUNT NAME,A/C NUM, BANK NAME, CITY <br><br>"+

            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
        
    
        }
        else if (selectedProduct === "RCBC" && selectedDisbursalMode === "GCASH remit cash pickup") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - Php 40,000 max -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 120<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : RCBC TO GCASH REMIT CASH PICK UP ANYWHERE <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
        
    
        }
        else if (selectedProduct === "RCBC" && selectedDisbursalMode === "GPRS all in cash pick up") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - Php 50,000 max -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 150<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : RCBC TO GPRS ALL IN CASH PICK UP ANYWHERE <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
        
    
        }
        else if (selectedProduct === "RCBC" && selectedDisbursalMode === "LBC all in cash pick up") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - Php 75,000 Max -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 150<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : RCBC TO CEBUANA CASH PICK UP ANYWHERE <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br><br>"+

            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
        
    
        }
        else if (selectedProduct === "RCBC" && selectedDisbursalMode === "Mlhuiller cash pick up") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - Php 50,000 max -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 200<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS :RCBC TO MLHUILLIER CASH PICK UP ANYWHERE <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS :BNF NAME, BNF MOBILE NUM <br><br>"+
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
        
    
        }
        else if (selectedProduct === "RCBC" && selectedDisbursalMode === "SBA/Propety payment") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - No CAP Limit -" +
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 2-3 DAYS...-"+ "BACKEND CHARGES - 100<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : RCBC TO LAND HOUSING PAYMENT POLICY NUMBER <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : HOUSING PAYMENT, POLICY NUMBER,HOUSE LAND NAME <br><br>"+
            "REMARKS FOR PHILIPPINESS : <br>PHP 500,000.00 above AML required. PROPERTY PAYMENT ROUTE TROUGH BDO, BPI AND METRO BANK CASH PICK UP SAME DAY CUT OFF TIME 12:OO NN DXB TIME";
        
    
        }

        else if (selectedProduct === "AGRANI BANK LTD" && selectedDisbursalMode === "Cash Pick") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT UPTO AED 1000 "+
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT ABOVE AED 1000 TT CHARGE IS 20" + 
            "VALUE DATE - NEXT WORKING DATE...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS :  BRANCH SPECIFIC, BNF'S  MOBILE NO REQUIRED <br><br>" +
            "SPECIAL REMARKS : MAX LIMIT P/TXN 500000 BDT, BNF VALID PHOTO ID REQUIRD TO CLAIM HIS/HER PAYMENTS IN BANGLADESH<br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM,BANK NAME, BRANCH & DISTRICT NAME. <br><br>"+

            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "AGRANI BANK LTD" && selectedDisbursalMode === "Direct A/C Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 TT CHARGE IS 15 <br><br>" + 
            "TRANSACTION AMOUNT - ABOVE AED 1000 TT CHARGE IS 20  <br><br>" + 
            
            "VALUE DATE - NEXT WORKING DATE...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : AGRANI TO AGRANI BANK A/C CREDIT ONLY <br><br>" +
            "SPECIAL REMARKS : ABOVE 1 MILLION BDT AML REQUIRED <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, A/C NUM, BRANCH NAME WITH BRANCH CODE & DISTRICT NAME. <br><br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "BANGLADESH KRISHI BANK LTD" && selectedDisbursalMode === "Direct A/C Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 TT CHARGE IS 15 <br><br>" + 
            "TRANSACTION AMOUNT - ABOVE AED 1000 TT CHARGE IS 20<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DATE...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BKB TO BKB A/C CREDIT ONLY <br><br>" +
            "SPECIAL REMARKS : CASH PICK UP & OTHER BANK CREDIT ARE NOT AVAILABLE. <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, A/C NUM, BRANCH & DISTRICT NAME. <br><br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }


        else if (selectedProduct === "BRAC BANK LTD" && selectedDisbursalMode === "Cash Pick") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 - " +
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20"+
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BRANCH SPECIFIC, BNF'S  MOBILE NO REQUIRED <br><br>" +
            "SPECIAL REMARKS : MAX LIMIT P/TXN 500000, BDTBNF VALID PHOTO ID REQUIRD TO CLAIM HIS/HER PAYMENTS IN BANGLADESH   <br><br>" +
            "MANDATORY FIELDS :  CASH PICK UP & OTHER BANK CREDIT ARE NOT AVAILABLE. <br><br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "BRAC BANK LTD" && selectedDisbursalMode === "Direct A/C Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 -" +
            "TT CHARGE IS 15<br><br>" + 
             
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20"+
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BRAC TO BRAC A/C CREDIT ONLY <br><br>" +
            "SPECIAL REMARKS : ABOVE 1 MILLION BDT AML REQUIRED <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, A/C NUM, BRANCH & DISTRICT NAME. <br><br>"+

            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "BRAC BANK LTD" && selectedDisbursalMode === "BKASH A/C Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 -" +
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGES IS 20"+
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : A/C NO SHOULD BE 11 DIGITS  <br><br>" +
            "SPECIAL REMARKS : ALSO CALL AS MOBILE BANKING <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BRANCH NAME & ADDRESS = BKASH, 11 DIGIT ACCOUNT NUM <br><br>"+

            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "BANK ASIA LTD" && selectedDisbursalMode === "Cash Pick") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 -" +
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE AED 1000 TT CHARGE IS 20" + 
            "VALUE DATE - 1-2 DAYS...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BRANCH SPECIFIC, BNF'S  MOBILE NO REQUIRED <br><br>" +
            "SPECIAL REMARKS : MAX LIMIT P/TXN 500000 BDT, BNF VALID PHOTO ID REQUIRD TO CLAIM HIS/HER PAYMENTS IN BANGLADESH <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM,BANK NAME, BRANCH & DISTRICT NAME. <br><br>"+

            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "BANK ASIA LTD" && selectedDisbursalMode === "Direct A/C Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 -" +
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE AED 1000 TT CHARGE IS 20" +
            "VALUE DATE - 1-2 DAYS...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BANK ASIA TO BANK ASIA  A/C CREDIT ONLY <br><br>" +
            "SPECIAL REMARKS : ABOVE 1 MILLION BDT AML REQUIRED <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, A/C NUM, BRANCH & DISTRICT NAME. <br><br>"+

            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "BANK ASIA LTD" && selectedDisbursalMode === "Other Bank A/C Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 -" +
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE AED 1000 TT CHARGE IS 20" +
            "VALUE DATE - 2-3 DAYS...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : PLEASE MENTIONED DISTRIECT NAME IN BOTH  (CITY/DIST) FIELD. <br><br>" +
            "SPECIAL REMARKS : CITY/DISTRICT  AREA 2 DAYS &  REMOTE AREA ONLY FOR GOV- BANKS 3 WORKING DAYS <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM,BANK NAME, BRANCH & DISTRICT NAME. <br><br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "DUTCH BANGLA BANK LTD" && selectedDisbursalMode === "Cash Pick") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 -" +
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" +
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : PAY ANY DBBL BR IN BANGLADESH <br><br>" +
            "SPECIAL REMARKS : MAX LIMIT P/TXN 700000 BDT, BNF VALID PHOTO ID REQUIRD TO CLAIM HIS/HER PAYMENTS IN BANGLADESH <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM,BANK NAME, BRANCH : PAY ANYWHERE, & DISTRICT NAME IS NOT REQUIRED. <br><br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "DUTCH BANGLA BANK LTD" && selectedDisbursalMode === "DBBL Mobile Banking A/C Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000" +
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" + 
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : A/C NO SHOULD BE 12 DIGITS  <br><br>" +
            "SPECIAL REMARKS : ABOVE 1 MILLION BDT AML REQUIRED <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BRANCH NAME & ADDRESS = BKASH, 12 DIGIT ACCOUNT NUM <br><br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "DUTCH BANGLA BANK LTD" && selectedDisbursalMode === "Direct A/C Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000" +
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" + 
            "VALUE DATE - NEXT WORKING DAY..."+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : DBBL TO DBBL A/C CREDIT ONLY  <br><br>" +
            "SPECIAL REMARKS : ABOVE 1 MILLION BDT AML REQUIRED <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, A/C NUM, BRANCH & DISTRICT NAME. <br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "DUTCH BANGLA BANK LTD" && selectedDisbursalMode === "Other Banks A/C Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000" +
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" + 
            "VALUE DATE - 2-3 WORKING DAYS..."+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : PLEASE MENTIONED DISTRIECT NAME IN BOTH  (CITY/DIST) FIELD.  <br><br>" +
            "SPECIAL REMARKS : CITY/DISTRICT  AREA 2 DAYS &  REMOTE AREA ONLY FOR GOV- BANKS 3 WORKING DAYS <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, A/C NUM, BRANCH & DISTRICT NAME.. <br><br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "ISLAMIC BANK BANGLADESH LTD" && selectedDisbursalMode === "Cash Pick") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 <br><br>" +
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" +
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : PAY ANY WHERE IBBL BRANCH IN BANGLADESH <br><br>" +
            "SPECIAL REMARKS : MAX LIMIT P/TXN 700000 BDT, BNF VALID PHOTO ID REQUIRD TO CLAIM HIS/HER PAYMENTS IN BANGLADESH   <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM,BANK NAME, BRANCH & DISTRICT NAME. <br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "ISLAMIC BANK BANGLADESH LTD" && selectedDisbursalMode === "Direct A/C Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 <br><br>" +
            "TT CHARGE IS 15<br><br>" +
            
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" +
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - 140<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : IBBL TO IBBL A/C CREDIT ONLY <br><br>" +
            "SPECIAL REMARKS : ABOVE 1 MILLION BDT AML REQUIRED <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, A/C NUM, BRANCH & DISTRICT NAME. <br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        

        else if (selectedProduct === "NATIONAL BANK LTD" && selectedDisbursalMode === "Cash Pick") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 <br><br>" +
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" + 
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BRANCH SPECIFIC, BNF'S  MOBILE NO REQUIRED <br><br>" +
            "SPECIAL REMARKS : MAX LIMIT P/TXN 500000 BDT, BNF VALID PHOTO ID REQUIRD TO CLAIM HIS/HER PAYMENTS IN BANGLADESH   <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM,BANK NAME, BRANCH & DISTRICT NAME. <br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "NATIONAL BANK LTD" && selectedDisbursalMode === "Direct A/C Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 <br><br>" +
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" +
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : NBL TO NBL A/C CREDIT ONLY <br><br>" +
            "SPECIAL REMARKS : ABOVE 1 MILLION BDT AML REQUIRED <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, A/C NUM, BRANCH & DISTRICT NAME. <br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "UNITED COMMERCIAL BANK" && selectedDisbursalMode === "Cash Pick") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 <br><br>" +
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" +
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BRANCH SPECIFIC, BNF'S  MOBILE NO REQUIRED <br><br>" +
            "SPECIAL REMARKS : MAX LIMIT P/TXN 500000 BDT, BNF VALID PHOTO ID REQUIRD TO CLAIM HIS/HER PAYMENTS IN BANGLADESH   <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM,BANK NAME, BRANCH & DISTRICT NAME. <br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "UNITED COMMERCIAL BANK" && selectedDisbursalMode === "Direct A/C Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 <br><br>" +
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" + 
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : UCBL TO UCBL A/C CREDIT ONLY <br><br>" +
            "SPECIAL REMARKS : ABOVE 1 MILLION BDT AML REQUIRED <br><br>" +
            "MANDATORY FIELDS :  BNF NAME, BANK NAME, A/C NUM, BRANCH & DISTRICT NAME. <br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "UTTARA BANK LTD" && selectedDisbursalMode === "Cash Pick") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 -" +
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" +
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BRANCH SPECIFIC, BNF'S  MOBILE NO REQUIRED <br><br>" +
            "SPECIAL REMARKS : MAX LIMIT P/TXN 500000 BDT, BNF VALID PHOTO ID REQUIRD TO CLAIM HIS/HER PAYMENTS IN BANGLADESH  <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM,BANK NAME, BRANCH & DISTRICT NAME. <br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "UTTARA BANK LTD" && selectedDisbursalMode === "Direct A/C Credit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 -" +
            "TT CHARGE IS 15<br><br>" + 

            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" +
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : UTTARA TO UTTARA A/C CREDIT ONLY <br><br>" +
            "SPECIAL REMARKS : ABOVE 1 MILLION BDT AML REQUIRED <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, A/C NUM, BRANCH & DISTRICT NAME. <br>"+
            "REMARKS FOR BANGLADESH : N/A"; 
    
        }

        else if (selectedProduct === "National Bank Of Pakistan" && selectedDisbursalMode === "NBP BANK Direct Deposit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO PKR 10500 -" +
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE PKR 10500 - TT CHARGE IS FREE OF COST" + 
            "VALUE DATE - 1-2 WORKING DAYS...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : NIL <br><br>" +
            "SPECIAL REMARKS : DO NOT ACCEPT COMMERCIAL OR CHARITABLE TXN <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM,  BRANCH ADDRESS.<br>"+
            "REMARKS FOR PAKISTAN: N/A"; 
    
        }

        else if (selectedProduct === "National Bank Of Pakistan" && selectedDisbursalMode === "NBP Cash Pick UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO PKR 10500 -" +
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT - ABOVE PKR 10500 - TT CHARGE IS FREE OF COST" +
            "VALUE DATE - NEXT WORKING DAYS...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : GLOBAL ID, MAX LIMIT 500,000 PKR<br><br>" +
            "SPECIAL REMARKS : PROVIDE GLOBAL ID (GL ID) NUMBER TO COLECT THE FUND  <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM,BANK NAME, BRANCH : PAY ANYWHERE <br>"+
            "REMARKS FOR PAKSITAN : N/A"; 
    
        }
        else if (selectedProduct === "National Bank Of Pakistan" && selectedDisbursalMode === "Other Bank") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO PKR 10500 -" +
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE PKR 10500 - TT CHARGE IS FREE OF COST" + 
            "VALUE DATE - 2-3 WORKING DAYS...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : NIL <br><br>" +
            "SPECIAL REMARKS : DO NOT ACCEPT COMMERCIAL OR CHARITABLE TXN <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM,  BRANCH ADDRESS. <br>"+
            "REMARKS FOR PAKSITAN : N/A"; 
    
        }
        else if (selectedProduct === "Summit" && selectedDisbursalMode === "Other Bank") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO PKR 10500 -" +
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT - ABOVE PKR 10500 - TT CHARGE IS FREE OF COST" + 
            "VALUE DATE - 2-3 WORKING DAYS...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BPI TO CLH/MLH CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : SELECT CORRECT BANK CODE / DO NOT ACCEPT COMMERCIAL OR CHARITABLE TXN.  <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM,  BRANCH ADDRESS. <br>"+
            "REMARKS FOR PAKSITAN : N/A"; 
    
        }

        else if (selectedProduct === "Summit" && selectedDisbursalMode === "Summit Bank Direct Deposit") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO PKR 10500 -" +
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE PKR 10500 - TT CHARGE IS FREE OF COST" + 
            "VALUE DATE - 1-2 WORKING DAYS...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : DUE TO SYSTEM ISSUE KINDLY ROUTE SUMMIT BANK DIRECT TXN THRU NBP BANK ONLY <br><br>" +
            "SPECIAL REMARKS : DO NOT ACCEPT COMMERCIAL OR CHARITABLE TXN.  <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM,  BRANCH ADDRESS. <br>"+
            "REMARKS FOR PAKSITAN : N/A"; 
    
        }
        else if (selectedProduct === "Summit" && selectedDisbursalMode === "Summit/Allied Cash Pick UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO PKR 10500 -" +
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE PKR 10500 - TT CHARGE IS FREE OF COST" +
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : CNIC NUMBER, MAX LIMIT 500,000 PKR <br><br>" +
            "SPECIAL REMARKS : FOR SUMMIT BANK SELECT DRAWEE LOCATION AS KARACHI, FOR ALLIED BANK  TOBA TEK SINGH <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM,BANK NAME, BRANCH : PAY ANYWHERE <br>"+
            "REMARKS FOR PAKSITAN : N/A"; 
    
        }
        else if (selectedProduct === "Lotus London -TT" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY  -" +
            "TT CHARGE IS 45<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - 16/18<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BK END CHRG UPTO GBP 20,000 - 16 GBP, ABOVE GBP 20,000 - 18 GBP <br><br>" +
            "SPECIAL REMARKS : If need to get full credit on any amount, charge will be 110 AED <br><br>" +
            "MANDATORY FIELDS : Need Ac name, Bank Name, Ac Num and Sort Code, If IBAN is there, IBAN should mention in the account number field. <br>"+
            "REMARKS FOR UNITED KINGDOM : N/A"; 
    
        }

        else if (selectedProduct === "SCB-Swift" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" +
            "TT CHARGE IS 45<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - DEPENDS ON THE BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : If txn is going out of UK rout through SCB only (In this case IBAN is mandatory) <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : Need Ac name, Bank Name, SWIFT and IBAN is mandatory and it should mention in the account number field. <br>"+
            "REMARKS FOR UNITED KINGDOM : N/A"
    
        }


        else if (selectedProduct === "DEUTSCHE BANK-SWIFT" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" +
            "TT CHARGE IS 45<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - 25 TO 55<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : For every other country transactions Beneficiary address is mandatory. <br><br>" +
            "MANDATORY FIELDS : (USE FOR CORPORATE CLIENT ONLY), NEVER PUT SWIFT IN IFSC FIELD <br>"+
            "REMARKS FOR USA : N/A"
        }

        else if (selectedProduct === "SCB.NY-SWIFT" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" +
            "TT CHARGE IS 45<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - 25 TO 55<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : For every other country transactions Beneficiary address is mandatory. <br><br>" +
            "MANDATORY FIELDS : SWIFT REQUIRE FOR USD TXN,BIC = SWIFT (BOTH SAME), NEVER PUT SWIFT IN IFSC FIELD <br>"+
            "REMARKS FOR USA : N/A"
        }

        else if (selectedProduct === "Lotus Australia-TT" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" +
            "TT CHARGE IS 45<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...<br>"+ "BACKEND CHARGES - 16 AUD<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : If need to credit full amount, charge will be 110 AED  <br><br>" +
            "MANDATORY FIELDS : Need Ac name, Bank name, Ac Number and BSB Number <br>"+
            "REMARKS FOR AUSTRALIA : N/A";
    
        }
       
        else if (selectedProduct === "SCB-AUD Fax" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" +
            "TT CHARGE IS 45<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - DEPENDS ON BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : If txn is going out of Australia rout through SCB only (In this case IBAN is mandatory) <br><br>" +
            "SPECIAL REMARKS : NEVER PUT SWIFT IN IFSC FIELD <br><br>" +
            "MANDATORY FIELDS : Need Ac name, Bank name, Ac Number, IBAN and swift <br>"+
            "REMARKS FOR AUSTRALIA : N/A";
    
        }

        else if (selectedProduct === "Nanoo Exchange-TT" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY - " +
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - DEPENDS ON THE BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : Ac Name, Bank Name, Ac num or IBAN and Swift, need ben ID number and contact num. and also remitter residential address is must, dnt put company name as remitter address <br>"+
            "REMARKS FOR BAHARAIN : N/A";
    
        }


        else if (selectedProduct === "Nanoo Exchange-TT" && selectedDisbursalMode === "CASH PICK-UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" +
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...-"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : CORRECT BENEFICIARY NAME, ID NUMBER AND CONTACT NUMBER REQUIRED <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br>"+
            "REMARKS FOR BAHARAIN : N/A";
    
        }
        else if (selectedProduct === "SCB -Fax" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" +
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - DEPENDS ON THE BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : NEVER PUT SWIFT IN IFSC FIELD <br><br>" +
            "SPECIAL REMARKS : Ac Name, Bank Name, IBAN and Swift and also remitter residential address is must, dnt put company name as remitter address <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br>"+
            "REMARKS FOR DENMARK : N/A";
    
        }
        else if (selectedProduct === "Crown Exchange-TT" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" +
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...-"+ "BACKEND CHARGES - 30 TO 50 CNY<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : Ac Name, Bank Name, Branch Name, Account Number, Swift and Contact Number also needed. <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br>"+
            "REMARKS FOR CHINA : N/A";
    
        }
        else if (selectedProduct === "Crown Exchange-TT" && selectedDisbursalMode === "CASH PICK-UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" +
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...-"+ "BACKEND CHARGES - 30 TO 50 CNY<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : NUMBER IS REQUIRED<br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : Beneficiary Contact num is mandatory.  "+
            "REMARKS FOR CHINA : N/A";
    
        }
        else if (selectedProduct === "SCB.DUBAI--FAX" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" +
            "TT CHARGE IS 45<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...-"+ "BACKEND CHARGES - 20 TO 35<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : NEVER PUT SWIFT IN IFSC FIELD <br><br>" +
            "SPECIAL REMARKS : For every other country transactions Beneficiary address is mandatory. <br><br>" +
            "MANDATORY FIELDS : Ac Name, Bank Name, branch, Ac Num, Transit Number Bene Address mandatory, SWIFT require. <br>"+

            "REMARKS FOR CANADA: N/A";
    
        }
        else if (selectedProduct === "SCB-FAX" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" +
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - 1-2 WORKING DAYS...-"+ "BACKEND CHARGES - DEPENDS ON THE BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS :remitter residential address is must, dnt put company name as remitter address <br><br>" +
            "SPECIAL REMARKS : For every other country transactions Beneficiary address is mandatory. <br><br>" +
            "MANDATORY FIELDS : IBAN and Swift code is must, NEVER PUT SWIFT IN IFSC FIELD <br>"+
            "REMARKS FOR CANADA : N/A";
    
        }
        else if (selectedProduct === "BANQUE MISR-TT" && selectedDisbursalMode === "BANK TO BANK") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" +
            "TT CHARGE IS 15<br><br>" + 
            
            "VALUE DATE - 2 WORKING DAYS...-"+ "BACKEND CHARGES - DEPENDS ON THE BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A. <br><br>" +
            "SPECIAL REMARKS : COMMERCIAL TRANSACTIONS ARE NOT ALLOWED. <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM,  BRANCH DETAILS AND SWIFT CODE. <br>"+

            "REMARKS FOR EGYPT : N/A";
    
        }
        else if (selectedProduct === "BANQUE MISR-TT" && selectedDisbursalMode === "CASH PICK UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY - " +
            "TT CHARGE IS 15<br><br>" + 
            
            "VALUE DATE - 2 WORKING DAYS...<br>"+ "BACKEND CHARGES - DEPENDS ON THE BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BEN ID NUMBER, CONTACT NUMBER  <br>"+

            "REMARKS FOR EGYPT : N/A"
    
        }
        else if (selectedProduct === "SCB.Newyork-Swift" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" +
            "TT CHARGE IS 45<br><br>" + 
            
            "VALUE DATE - 2 WORKING DAYS...<br>"+ "BACKEND CHARGES - EURO 10 AND ABOVE<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : For every other country transactions Beneficiary address is mandatory. <br><br>" +
            "MANDATORY FIELDS :IBAN and Swift code is must, NEVER PUT SWIFT IN IFSC FIELD <br>" + 
            "REMARKS FOR EUROPE : N/A";
    
        }
        else if (selectedProduct === "AL Zamil Exchange TT" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - 1-2 WORKING DAYS...<br>"+ "BACKEND CHARGES - N/A<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : Ac Name, Bank Name, Branch Name, Account Number, Swift and Ben ID and Contact Number also needed.<br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : N/A <br>"+

            "REMARKS FOR KUWAIT : N/A";
    
        }

        else if (selectedProduct === "AL Zamil Exchange TT" && selectedDisbursalMode === "CASH PICK-UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - N/A<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : FOR CASH PICK UP TXN CORRECT BENEFICIARY NAME, ID NUMBER AND CONTACT NUMBER REQUIRED <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : N/A <br>"+

            "REMARKS FOR KUWAIT : N/A";
    
        }

        else if (selectedProduct === "SCB- FAX" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY" + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - N/A<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : Ac Name, Bank Name, Branch Name, Account Number, Swift and IBAN also needed. <br><br>" +
            "SPECIAL REMARKS : NEVER PUT SWIFT IN IFSC FIELD <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM,  BRANCH DETAILS, IBAN AND SWIFT CODE. <br>"+

              "REMARKS FOR KUWAIT : N/A"
    
        }

        else if (selectedProduct === "SCB-  Fax" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY <br><br>" +  
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - N/A<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : Ac Name, Bank Name, Branch Name, Account Number, Swift and IBAN also needed. <br><br>" +
            "SPECIAL REMARKS : NEVER PUT SWIFT IN IFSC FIELD <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM,  BRANCH DETAILS, IBAN AND SWIFT CODE. <br>";
    
        }


        else if (selectedProduct === "Lotus Malaysia TT" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY -" + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - 20 MYR<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS :  Need Ac name, Bank Name, Ac num and Swift Code<br>"+
            "REMARKS FOR MALAYSIA : N/A"
    
        }
        else if (selectedProduct === "Himalayan Bank TT" && selectedDisbursalMode === "CASH PICK-UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000  -" + 
            "TT CHARGE IS 18<br><br>" + 

            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : MAX LIMIT 500,000 NPR <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BEF ID NUMBER BNF CONTACT NUM. <br>"+
            "REMARKS FOR NEPAL : N/A"
    
        }
        else if (selectedProduct === "Himalayan Bank TT" && selectedDisbursalMode === "DIRECT BANK") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 " + 
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" +
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc. <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM,  BRANCH DETAILS. <br>"+
             "REMARKS FOR NEPAL : N/A";
    
        }
        else if (selectedProduct === "Himalayan Bank TT" && selectedDisbursalMode === "OTHER BANK") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000-" + 
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20" +
            "VALUE DATE - 2-4 WORKING DAYS...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS :No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc. <br><br>" +
            "MANDATORY FIELDS :  BNF NAME, BANK NAME, ACCOUNT NUM,  BRANCH DETAILS.<br>"+
             "REMARKS FOR NEPAL : N/A";
    
        }
        else if (selectedProduct === "Leela Megh Exchange TT" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY" + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...<br>"+ "BACKEND CHARGES - 3 OMR<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc. <br><br>" +
            "MANDATORY FIELDS : Ac Name, Branch Details, Ac Num and Swift needed, Ben ID num and Contact num is mandatory. <br>"+

            "REMARKS FOR OMAN : N/A"
    
        }

        else if (selectedProduct === "Leela Megh Exchange TT" && selectedDisbursalMode === "CASH PICK-UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY " + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - 3 OMR<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : CORRECT BENEFICIARY NAME, ID NUMBER AND CONTACT NUMBER REQUIRED <br><br>" +
            "SPECIAL REMARKS : No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc. <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br>"+

             "REMARKS FOR OMAN : N/A";
    
        }

        else if (selectedProduct === "ALDAR Exchange TT" && selectedDisbursalMode === "CASH PICK-UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY " + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - 1-2 WORKING DAYS...<br>"+ "BACKEND CHARGES - DEPENDS ON THE BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : Ac Name, Branch Details, Ac Num and Swift needed, Ben ID num and Contact num is mandatory. also remitter residential address is mandatory, dnt put company name as remitter address <br>"+
            "REMARKS FOR QATAR : N/A";
    
        }
        else if (selectedProduct === "ALDAR Exchange TT" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY" + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : CORRECT BENEFICIARY NAME, BEN ID NUMBER AND CONTACT NUMBER REQUIRED <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : N/A <br>"+
            "REMARKS FOR QATAR : N/A";
    
        }

        else if (selectedProduct === "scb--fax" && selectedDisbursalMode === "N/A") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - N/A " + 
            "TT CHARGE IS N/A <br><br>" + 
            
            "VALUE DATE - N/A <br>"+ "BACKEND CHARGES - N/A <br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : N/A <br>"+
            "REMARKS FOR QATAR : N/A";
    
        }
        else if (selectedProduct === "BANK OF CEYLON" && selectedDisbursalMode === "BANK TO BANK/OTHER BANK") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 - " + 
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20<br><br>"+
            "VALUE DATE - N/A...<br>"+ "BACKEND CHARGES - ARE PRESENT<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BANK END CHARGES FOR BANK TRANSFER LKR 100 <br><br>" +
            "SPECIAL REMARKS : IF BRANCH NAME IS NOT FOUND THEN PLEASE SELECT CENTRAL BUS STATION BRANCH. <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM,  BRANCH NAME <br>"+
            "REMARKS FOR SRI LANKA : N/A";
    
        }

        else if (selectedProduct === "BANK OF CEYLON" && selectedDisbursalMode === "CASH PICK-UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 -  " + 
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20<br><br>" +
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - ARE PRESENT<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : MAX LIMIT 500,000, BK END CHRG CASH PICKUP LKR 150 BANK TRNSFR LKR 100 <br><br>" +
            "SPECIAL REMARKS : IF BRANCH NAME IS NOT FOUND THEN PLEASE SELECT CENTRAL BUS STATION BRANCH.. <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF CONTACT NUM <br>"+

            "REMARKS FOR SRI LANKA : N/A";
    
        }

        else if (selectedProduct === "COMMERCIAL BANK OF CEYLON" && selectedDisbursalMode === "ACCOUNTS TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 " + 
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20<br><br>"+
            "VALUE DATE - 1-2 DAYS...<br>"+ "BACKEND CHARGES - ARE PRESENT<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : N/A."  +
            "MANDATORY FIELDS : BNF NAME, AC NUM, BRANCH NAME. <br>"+
            "REMARKS FOR SRI LANKA : N/A";
    
        }

        else if (selectedProduct === "COMMERCIAL BANK OF CEYLON" && selectedDisbursalMode === "CASH PICK-UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000" + 
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20<br><br>"+
            "VALUE DATE - 1-2 DAYS...<br>"+ "BACKEND CHARGES - ARE PRESENT<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : NAME AMENDMENT IS NOT POSSIBLE FOR CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : BK END CHRG: CASH PICK UP UP TO 5,000 LKR 150, LKR 5,001 TO 500,000 LKR 250. LKR 500,001 AND ABOVE LKR 500  <br><br>" +
            "MANDATORY FIELDS : BNF NAME, AC NUM, BRANCH NAME <br>"+
            "REMARKS FOR SRI LANKA : N/A";
    
        }
        else if (selectedProduct === "COMMERCIAL BANK OF CEYLON" && selectedDisbursalMode === "OTHER BANK A/C") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 " + 
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20<br><br>"+
            "VALUE DATE - 2 WORKING DAYS...<br>"+ "BACKEND CHARGES - ARE PRESENT<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : TRANSFER TO LKR ACCOUNTS ONLY, OTHER BANK TWO WORKING DAYS <br><br>" +
            "SPECIAL REMARKS : BACK END CHARGES :  BANK TRANSFER - LKR 100 No transactions to Charitable institutions like a Trust, Sanstha, Club, Societies etc. <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM,  BRANCH NAME <br>"+
            "REMARKS FOR SRI LANKA : N/A";
    
        }
        else if (selectedProduct === "HATTON NATIONAL BANK" && selectedDisbursalMode === "BANK TO BANK") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 " + 
            "TT CHARGE IS 15<br><br>" + 
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20<br><br>"+
            "VALUE DATE - 2 WORKING DAYS...<br>"+ "BACKEND CHARGES - ARE PRESENT<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : HNB AND OTHER BANKS, OTHER BANK TWO WORKING DAYS <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BANK NAME, ACCOUNT NUM,  BRANCH NAME <br>"+
            "REMARKS FOR SRI LANKA : N/A";
    
        }
        else if (selectedProduct === "HATTON NATIONAL BANK" && selectedDisbursalMode === "CASH PICK UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - UPTO AED 1000 <br><br>" + 
            "TT CHARGE IS 15<br><br>" + 
            
            "TRANSACTION AMOUNT - ABOVE AED 1000 - TT CHARGE IS 20<br><br>" +
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - ARE PRESENT<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : NAME AMENDMENT IS NOT POSSIBLE FOR CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF CONTACT NUM. <br>"+
            "REMARKS FOR SRI LANKA : N/A";
    
        }
        else if (selectedProduct === "Asma Exchange-TT" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - 0 TO 150,000 " + 
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...<br>"+ "BACKEND CHARGES - 140<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : BPI TO CLH/MLH CASH PICK UP <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, BNF MOBILE NUM <br>"+
            "REMARKS FOR THAILAND : N/A";
    
        }
        else if (selectedProduct === "Asma Exchange-TT" && selectedDisbursalMode === "CASH PICK UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY " + 
            "TT CHARGE IS 18<br><br>" + 
            
            "VALUE DATE - 1-2 WORKING DAYS...<br>"+ "BACKEND CHARGES - DEPENDS ON THE BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : Need Ac name, Bank Name, Ac num and Swift Code<br>"+
            
            "REMARKS FOR THAILAND : N/A";
    
        }

        else if (selectedProduct === "Asma Exchange-TT" && selectedDisbursalMode === "CASH PICK UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY " + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - N/A<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : BNF NAME, ID NUM AND CONTACT NUM REQUIRED<br>"+
            
            "REMARKS FOR THAILAND : N/A";
    
        }

        else if (selectedProduct === "Lotus HongKong-TT" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY " + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - 1-2 DAYS...<br>"+ "BACKEND CHARGES - DEPENDA ON THE BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : Need Ac name, Bank Name,  Ac num and Swift Code <br>"+
            
            "REMARKS FOR HONG-KONG : N/A";
    
        }

        else if (selectedProduct === "BANK NEGARA INDONASIA SWIFT" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY " + 
            "TT CHARGE IS 25<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - 40K TO 55K<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : For every other country transactions Beneficiary address is mandatory. <br><br>" +
            "MANDATORY FIELDS : SWIFT REQUIRE, NEVER PUT SWIFT IN IFSC FIELD <br>"+
            
            "REMARKS FOR INDONASIA : N/A";
    
        }
        else if (selectedProduct === "SCB-fax" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY <br><br>" + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - 1-2 WORKING DAYs...<br>"+ "BACKEND CHARGES - DEPENDS ON THE BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : Remitter Residential Address is must, dnt put company name as remitter address <br><br>" +
            "SPECIAL REMARKS : For every other country transactions Beneficiary address is mandatory. <br><br>" +
            "MANDATORY FIELDS : IBAN and Swift code is must, NEVER PUT SWIFT IN IFSC FIELD <br>";
    
        }

        else if (selectedProduct === "Crown-Exchange TT" && selectedDisbursalMode === "CASH PICK UP") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY <br><br>" + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - NIL<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : CORRECT BENEFICIARY NAME AND CONTACT NUMBER REQUIRED <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : N/A <br>";
    
        }

        else if (selectedProduct === "Crown-Exchange TT" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY <br><br>" + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - DEPENDS ON THE BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : Need Ac name, Bank Name, swift and Ac num. <br>";
    
        }

        else if (selectedProduct === "SCB-   Fax" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY <br><br> " + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - DEPENDS ON THE BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : Need Ac name, Bank Name, swift and Ac num. <br>";
    
        }


        else if (selectedProduct === "SCB.DUBAI -FAX" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY <br><br> " + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - 1-2 WORKING DAYs...<br>"+ "BACKEND CHARGES - DEPENDS ON THE BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A <br><br>" +
            "SPECIAL REMARKS : N/A <br><br>" +
            "MANDATORY FIELDS : Need Ac name, Bank Name, swift and Ac num. <br>";
    
        }

        else if (selectedProduct === "SCB.Dubai-fax" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY <br><br> " + 
            "TT CHARGE IS 45<br><br>" + 
            
            "VALUE DATE - NEXT WORKING DAY...<br>"+ "BACKEND CHARGES - 10 TO 25<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : N/A  <br><br>" +
            "SPECIAL REMARKS : For every other country transactions Beneficiary address is mandatory. <br><br>" +
            "MANDATORY FIELDS : SWIFT REQUIRE, NEVER PUT SWIFT IN IFSC FIELD <br>";
    
        }


        else if (selectedProduct === "SCB-FaX" && selectedDisbursalMode === "BANK TRANSFER") {
            disbursalMessage.innerHTML = 
            "TRANSACTION AMOUNT - CAN BE ANY <br><br> " + 
            "TT CHARGE IS 50<br><br>" + 
            
            "VALUE DATE - 1-2 WORKING DAYS...<br>"+ "BACKEND CHARGES - DEPENDS ON THE BANK<br><br>" + // Remove the semicolon here
            "SPECIAL TIPS : remitter residential address is must, dnt put company name as remitter address<br><br>" +
            "SPECIAL REMARKS : For every other country transactions Beneficiary address is mandatory. <br><br>" +
            "MANDATORY FIELDS : IBAN and Swift code is must, NEVER PUT SWIFT IN IFSC FIELD <br>";
    
        }



         else {
            disbursalMessage.textContent = ""; 
        }
    });

   