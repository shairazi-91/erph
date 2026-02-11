const MASTER_DATA = {
    "Tingkatan 2 (DLP)": {
        "1.0 BIODIVERSITY": {
            "1.1 Diversity of organism": ["1.1.1 Elaborate and communicate about biodiversity.", "1.1.2 Justify the needs to manage biodiversity effectively."],
            "1.2 Classification of organisms": ["1.2.1 Differentiate organisms using a dichotomous key.", "1.2.2 Characterise the major taxonomy group."]
        },
        "2.0 ECOSYSTEM": {
            "2.1 Energy flow in ecosystem": ["2.1.1 Explain with examples of producer, consumer and decomposer.", "2.1.2 Interprete food chain and food web."],
            "2.2 Nutrient cycle in the ecosystem": ["2.2.1 Elaborate and communicate about the role of living things in cycles.", "2.2.2 Justify the role of organisms in the water cycle.", "2.2.3 Solve problems on interference to cycles."],
            "2.3 Interdependence": ["2.3.1 Explain interdependence.", "2.3.2 Justify importance of adaptations.", "2.3.3 Communicate examples of interactions.", "2.3.4 Factors affecting population size.", "2.3.5 Predict changes in ecosystem."]
        },
        "3.0 NUTRITION": {
            "3.1 Classes of food": ["3.1.1 Elaborate classes of food.", "3.1.2 Test presence of starch, glucose, protein, fats."],
            "3.2 Importance of balanced diet": ["3.2.1 Elaborate balanced diet.", "3.2.2 Estimate calories.", "3.2.3 Justify importance of balanced diet."],
            "3.3 Human digestive system": ["3.3.1 Elaborate about digestion."],
            "3.4 Absorption and defecation": ["3.4.1 Experiment on absorption.", "3.4.2 Relate digestive, blood, respiratory systems.", "3.4.3 Elaborate about defecation."]
        },
        "4.0 HUMAN HEALTH": {
            "4.1 Infectious diseases": ["4.1.1 Differentiate infectious/non-infectious.", "4.1.2 Explain spread.", "4.1.3 Cause and spread.", "4.1.4 Mechanism to prevent spread."],
            "4.2 Body defence system": ["4.2.1 Function of body defence.", "4.2.2 Antigens, antibodies, immunity.", "4.2.3 Importance of immunisation.", "4.2.4 Passive vs Active immunity.", "4.2.5 Practices for strong immune system.", "4.2.6 Importance of health level."]
        },
        "5.0 WATER AND SOLUTION": {
            "5.1 Physical characteristics": ["5.1.1 Communicate about water.", "5.1.2 Experiment on evaporation."],
            "5.2 Solution and solubility": ["5.2.1 Solution and solubility.", "5.2.2 Factors affecting solubility.", "5.2.3 Colloids.", "5.2.4 Water as universal solvent.", "5.2.5 Organic solvents."],
            "5.3 Purification and supply": ["5.3.1 Purification methods.", "5.3.2 Water supply problems.", "5.3.3 Water supply system model.", "5.3.4 Water sustainability."]
        },
        "6.0 ACID AND ALKALI": {
            "6.1 Properties": ["6.1.1 Properties of acid and alkali.", "6.1.2 Examples of substances.", "6.1.3 Strength (pH).", "6.1.4 Uses in daily life."],
            "6.2 Neutralisation": ["6.2.1 Neutralisation reaction.", "6.2.2 Uses of neutralisation."]
        },
        "7.0 ELECTRICITY AND MAGNETISM": {
            "7.1 Electricity": ["7.1.1 Energy.", "7.1.2 Electrostatic charges.", "7.1.3 Electrostatic in daily life.", "7.1.4 Flow of charges.", "7.1.5 Current, voltage, resistance.", "7.1.6 Ohm's Law."],
            "7.2 Series and Parallel": ["7.2.1 Series and parallel circuits."],
            "7.3 Magnetism": ["7.3.1 Characteristics of magnet.", "7.3.2 Electromagnet.", "7.3.3 Uses of magnet/electromagnet."]
        },
        "8.0 FORCE AND MOTION": {
            "8.1 Force": ["8.1.1 Communicate about force.", "8.1.2 Characteristics of force.", "8.1.3 Measure force.", "8.1.4 Action and reaction force."],
            "8.2 Effects of force": ["8.2.1 Effects of force.", "8.2.2 Buoyancy and density.", "8.2.3 Levers.", "8.2.4 Moment of force.", "8.2.5 Pressure.", "8.2.6 Gas pressure.", "8.2.7 Atmospheric pressure.", "8.2.8 Liquid pressure."]
        },
        "9.0 HEAT": {
            "9.1 Temperature and heat": ["9.1.1 Compare heat and temperature."],
            "9.2 Heat flow": ["9.2.1 Heat flow methods.", "9.2.2 Natural phenomena.", "9.2.3 Conductors and insulators."],
            "9.3 Expansion": ["9.3.1 Expansion in matter.", "9.3.2 Uses in daily life."],
            "9.4 Heat absorption/emission": ["9.4.1 Dark/dull vs white/shiny (absorb).", "9.4.2 Dark/dull vs white/shiny (radiate).", "9.4.3 Green concept design."]
        },
        "10.0 SOUND WAVES": {
            "10.1 Characteristics": ["10.1.1 Basic characteristics."],
            "10.2 Loudness and pitch": ["10.2.1 Frequency and amplitude.", "10.2.2 Frequency and pitch.", "10.2.3 Amplitude and loudness.", "10.2.4 Musical instruments."],
            "10.3 Reflection of sound": ["10.3.1 Echo and Doppler.", "10.3.2 Applications (Sonar).", "10.3.3 Hearing limitations.", "10.3.4 Overcoming limitations."]
        },
        "11.0 STARS AND GALAXIES": {
            "11.1 Stars and galaxies": ["11.1.1 Characteristics of objects in space.", "11.1.2 Compare stars and Sun."]
        },
        "12.0 SOLAR SYSTEM": {
            "12.1 Solar System": ["12.1.1 Distances (A.U. / Light Years).", "12.1.2 Compare planets.", "12.1.3 Relationships of planet characteristics.", "12.1.4 Analogies.", "12.1.5 Earth as ideal planet."]
        },
        "13.0 METEOROID, ASTEROID, COMET": {
            "13.1 Other objects": ["13.1.1 Communicate on other objects.", "13.1.2 Movements and effects.", "13.1.3 Reducing collision risk."]
        }
    },
    "Tingkatan 3 (DLP)": {
        "1.0 STIMULI AND RESPONSES": { 
            "1.1 Human nervous system": ["1.1.1 Describe the structures and functions of human nervous system through drawings.", "1.1.2 Make a sequence to show the pathway of impulses.", "1.1.3 Justify the importance of human nervous system."], 
            "1.2 Stimuli and responses in human": ["1.2.1 Draw structures of sensory organs.", "1.2.2 Explain mechanism of hearing and sight.", "1.2.3 Relate sensory organs to sensitivity.", "1.2.4 Explain limitation of senses.", "1.2.5 Justify innovations in sensory organs."], 
            "1.3 Stimuli in plants": ["1.3.1 Describe parts of plant sensitive to stimuli.", "1.3.2 Justify responses in plants.", "1.3.3 Experiments on plant responses."], 
            "1.4 Importance of responses": ["1.4.1 Explain types of sight and hearing in animals.", "1.4.2 Communicate how sensory organs ensure survival."] 
        },
        "2.0 RESPIRATION": { 
            "2.1 Respiratory system": ["2.1.1 Draw and label human respiratory system.", "2.1.2 Experiments on inhaled and exhaled air."], 
            "2.2 Movement of gases": ["2.2.1 Describe movement of oxygen and CO2.", "2.2.2 Justify adaptation of alveolar structure."], 
            "2.3 Health": ["2.3.1 Communicate about harmful substances.", "2.3.2 Experiment on effects of smoking."], 
            "2.4 Adaptation": ["2.4.1 Justify respiratory adaptation."], 
            "2.5 Exchange in plants": ["2.5.1 Explain gaseous exchange mechanism.", "2.5.2 Justify importance of unpolluted environment."] 
        },
        "3.0 TRANSPORTATION": { 
            "3.1 Transport system": ["3.1.1 Describe function of transport systems.", "3.1.2 Compare complex and simple organisms.", "3.1.3 Justify importance."], 
            "3.2 Blood circulatory": ["3.2.1 Generalise meaning of blood circulatory.", "3.2.2 Explain structure and functions of heart.", "3.2.3 Experiment on pulse rate.", "3.2.4 Justify healthy heart."], 
            "3.3 Human blood": ["3.3.1 Separate components of blood.", "3.3.2 Identify blood groups.", "3.3.3 Importance of blood donation."], 
            "3.4 Transport in plants": ["3.4.1 Describe transpiration.", "3.4.2 Experiment on transpiration factors.", "3.4.3 Differentiate vascular bundle components."], 
            "3.5 Comparison": ["3.5.1 Compare blood circulatory and plant transport."] 
        },
        "4.0 REACTIVITY OF METALS": { 
            "4.1 Variety of minerals": ["4.1.1 Explain minerals in Earth crust.", "4.1.2 Identify elements in natural compounds.", "4.1.3 Explain characteristics of natural minerals."], 
            "4.2 Reactivity series": ["4.2.1 Construct reactivity series.", "4.2.2 Determine position of carbon and hydrogen."], 
            "4.3 Extraction": ["4.3.1 Communicate about extraction of metals.", "4.3.2 Generate ideas on solving mining problems."] 
        },
        "5.0 THERMOCHEMISTRY": { 
            "5.1 Reactions": ["5.1.1 Define endothermic and exothermic.", "5.1.2 Relate heat absorbed or released.", "5.1.3 Experiment to compare reactions.", "5.1.4 Explain with examples.", "5.1.5 Design materials using concepts."] 
        },
        "6.0 ELECTRICITY AND MAGNETISM": { 
            "6.1 Generation": ["6.1.1 Describe energy sources.", "6.1.2 Explain process of generating electricity.", "6.1.3 Differentiate d.c. and a.c.", "6.1.4 Solve problems related to electricity."], 
            "6.2 Transformer": ["6.2.1 Experiment to build transformer.", "6.2.2 Communicate about transformers.", "6.2.3 Solve numerical problems."], 
            "6.3 Transmission": ["6.3.1 Explain transmission components.", "6.3.2 Explain wiring systems.", "6.3.3 Distinguish safety components.", "6.3.4 Communicate about safety."], 
            "6.4 Cost": ["6.4.1 Define energy efficiency.", "6.4.2 List examples.", "6.4.3 Determine electricity used.", "6.4.4 Calculate cost.", "6.4.5 Audit home energy.", "6.4.6 Ways of saving energy."] 
        },
        "7.0 ENERGY AND POWER": { 
            "7.1 Work, Energy, Power": ["7.1.1 Define work.", "7.1.2 Relate power with work."], 
            "7.2 Potential & Kinetic": ["7.2.1 Explain gravitational potential energy.", "7.2.2 Calculate elastic potential energy.", "7.2.3 Explain kinetic energy."], 
            "7.3 Conservation": ["7.3.1 Explain Principle of Conservation of Energy.", "7.3.2 Solve problems involving transformation."] 
        },
        "8.0 RADIOACTIVITY": { 
            "8.1 Discovery": ["8.1.1 Describe history.", "8.1.2 Explain radioactive materials."], 
            "8.2 Atom and nucleus": ["8.2.1 Draw atomic structure.", "8.2.2 Explain ions."], 
            "8.3 Radiation": ["8.3.1 Describe ionising radiation.", "8.3.2 Differentiate three types.", "8.3.3 Explain sources.", "8.3.4 Discuss risks."], 
            "8.4 Usage": ["8.4.1 Communicate about usage.", "8.4.2 Justify proper handling."] 
        },
        "9.0 SPACE WEATHER": { 
            "9.1 Sun activities": ["9.1.1 Explain structure of Sun.", "9.1.2 Justify magnetosphere."], 
            "9.2 Space weather": ["9.2.1 Communicate about space weather."] 
        },
        "10.0 SPACE EXPLORATION": { 
            "10.1 Astronomy": ["10.1.1 Explain historical development."], 
            "10.2 Technology": ["10.2.1 Communicate about technology.", "10.2.2 Justify need to continue exploration."] 
        }
    },
    "Tingkatan 5": {
        "1.0 MIKROORGANISMA": {
            "1.1 Dunia mikroorganisma": ["1.1.1 Berkomunikasi mengenai mikroorganisma.", "1.1.2 Menjalankan eksperimen bagi menunjukkan kewujudan mikroorganisma.", "1.1.3 Menjalankan eksperimen untuk mengkaji faktor yang mempengaruhi pertumbuhan mikroorganisma."],
            "1.2 Mikroorganisma berfaedah": ["1.2.1 Mewajarkan aplikasi mikroorganisma berfaedah dalam kehidupan.", "1.2.2 Menjana idea potensi kegunaan mikroorganisma dalam bioteknologi dan kelestarian alam sekitar."],
            "1.3 Pencegahan dan rawatan": ["1.3.1 Menjelaskan konsep 'mencegah lebih baik daripada merawat'.", "1.3.2 Menerangkan teknik aseptik dalam pengawalan penyebaran mikroorganisma.", "1.3.3 Menjalankan eksperimen mengkaji kesan antibiotik terhadap pertumbuhan bakteria.", "1.3.4 Berkomunikasi tentang kaedah rawatan penyakit berjangkit."]
        },
        "2.0 NUTRISI DAN TEKNOLOGI MAKANAN": {
            "2.1 Gizi seimbang dan nilai kalori": ["2.1.1 Memerihalkan gizi seimbang.", "2.1.2 Menjalankan eksperimen untuk menganggarkan nilai kalori dalam sampel makanan.", "2.1.3 Mewajarkan kesan pengambilan jumlah kalori yang tidak menepati keperluan individu."],
            "2.2 Keperluan nutrien oleh tumbuhan": ["2.2.1 Menjelaskan dengan contoh fungsi makronutrien dan mikronutrien kepada tumbuhan.", "2.2.2 Menjalankan eksperimen untuk mengkaji kesan kekurangan makronutrien kepada tumbuhan."],
            "2.3 Kitar Nitrogen": ["2.3.1 Berkomunikasi mengenai Kitar Nitrogen dan kepentingannya."],
            "2.4 Teknologi pengeluaran makanan": ["2.4.1 Berkomunikasi mengenai cara meningkatkan sumber, kualiti makanan dan kuantiti pengeluaran makanan.", "2.4.2 Menilai penggunaan racun serangga dan kawalan biologi."],
            "2.5 Teknologi pemprosesan makanan": ["2.5.1 Berkomunikasi mengenai teknologi pemprosesan makanan."],
            "2.6 Makanan dan suplemen kesihatan": ["2.6.1 Berkomunikasi mengenai isu berkaitan makanan kesihatan dan suplemen kesihatan.", "2.6.2 Berkomunikasi mengenai isu berkaitan Status Halal makanan."]
        },
        "3.0 KELESTARIAN ALAM SEKITAR": {
            "3.1 Kitaran hayat produk": ["3.1.1 Menjelaskan maksud jejak karbon.", "3.1.2 Mencerakinkan produk dalam satu hari kehidupan individu.", "3.1.3 Mewajarkan langkah tapak tangan karbon.", "3.1.4 Berkomunikasi mengenai kitar hayat produk.", "3.1.5 Menjana idea pengurusan sisa plastik."],
            "3.2 Pencemaran alam sekitar": ["3.2.1 Menerangkan jenis dan punca pencemaran.", "3.2.2 Mengkaji tahap pencemaran air sisa domestik.", "3.2.3 Mereka cipta kaedah pembersihan air tercemar."],
            "3.3 Pemeliharaan dan pemuliharaan": ["3.3.1 Menjustifikasi peranan individu mengurus sumber semula jadi.", "3.3.2 Membahaskan peranan PBB dalam isu alam sekitar."]
        },
        "4.0 KADAR TINDAK BALAS": {
            "4.1 Pengenalan": ["4.1.1 Menjelaskan tindak balas cepat dan perlahan.", "4.1.2 Mentakrif kadar tindak balas.", "4.1.3 Menentukan kadar tindak balas."],
            "4.2 Faktor mempengaruhi kadar": ["4.2.1 Eksperimen mengkaji faktor kadar tindak balas (suhu, kepekatan, saiz, mangkin)."],
            "4.3 Aplikasi": ["4.3.1 Berkomunikasi mengenai aplikasi kadar tindak balas."]
        },
        "5.0 SEBATIAN KARBON": {
            "5.1 Pengenalan": ["5.1.1 Mengenal pasti sebatian karbon.", "5.1.2 Menjelaskan kepentingan Kitar Karbon."],
            "5.2 Hidrokarbon": ["5.2.1 Memerihalkan sebatian hidrokarbon.", "5.2.2 Menamakan ahli alkana dan alkena.", "5.2.3 Berkomunikasi tentang sumber tenaga alternatif."],
            "5.3 Alkohol": ["5.3.1 Memerihal proses penyediaan alkohol.", "5.3.2 Sifat fizik dan kimia alkohol.", "5.3.3 Kegunaan alkohol.", "5.3.4 Kesan pengambilan alkohol berlebihan."],
            "5.4 Lemak": ["5.4.1 Kandungan lemak dan sumber.", "5.4.2 Banding beza lemak tepu dan tak tepu.", "5.4.3 Kesan pengambilan lemak berlebihan."],
            "5.5 Minyak Sawit": ["5.5.1 Struktur buah kelapa sawit.", "5.5.2 Aspek kuantiti minyak.", "5.5.3 Proses pengestrakan.", "5.5.4 Komponen minyak sawit.", "5.5.5 Banding komposisi minyak.", "5.5.6 Sifat kimia.", "5.5.7 Pengemulsian.", "5.5.8 Kandungan nutrisi.", "5.5.9 Mewajarkan penggunaan.", "5.5.10 Eksperimen sabun.", "5.5.11 Tindakan pencucian sabun.", "5.5.12 Pengurusan lestari."]
        },
        "6.0 ELEKTROKIMIA": {
            "6.1 Sel Elektrolitik": ["6.1.1 Memahami elektrolisis.", "6.1.2 Eksperimen elektrolisis sebatian ion.", "6.1.3 Faktor mempengaruhi hasil elektrolisis.", "6.1.4 Aplikasi elektrolisis dalam industri."],
            "6.2 Sel Kimia": ["6.2.1 Perubahan tenaga sel kimia.", "6.2.2 Menjana idea aplikasi sel kimia."]
        },
        "7.0 CAHAYA DAN OPTIK": {
            "7.1 Kanta": ["7.1.1 Kanta cembung dan cekung.", "7.1.2 Menentukan panjang fokus.", "7.1.3 Menentukan ciri imej."],
            "7.2 Peralatan optik": ["7.2.1 Pembentukan imej teleskop/mikroskop.", "7.2.2 Membina teleskop ringkas.", "7.2.3 Aplikasi kanta dalam peralatan optik."]
        },
        "8.0 DAYA DAN TEKANAN": {
            "8.1 Tekanan bendalir": ["8.1.1 Konsep tekanan bendalir (Pascal).", "8.1.2 Aplikasi prinsip Pascal.", "8.1.3 Hubungan halaju dan tekanan (Bernoulli).", "8.1.4 Aplikasi prinsip Bernoulli.", "8.1.5 Reka bentuk alat tekanan bendalir."]
        },
        "9.0 TEKNOLOGI ANGKASA LEPAS": {
            "9.1 Satelit": ["9.1.1 Jenis orbit satelit.", "9.1.2 Kedudukan apogi dan perigi.", "9.1.3 Hubungan ketinggian orbit dan halaju.", "9.1.4 Cara pelancaran satelit.", "9.1.5 Menjejaki stesen angkasa.", "9.1.6 Kesan perkembangan pesat teknologi angkasa."],
            "9.2 GPS": ["9.2.1 Sistem Penentu Sejagat (GPS).", "9.2.2 Aplikasi sistem koordinat GPS."]
        }
    }
};
