const data = {
    name: "Medical Labs",
    children: [
        {
            name: "Clover",
            children: [
                {
                    name: "Iris - Polyclinic Mazaya 3",
                    floors: [
                        { floor: 2, codes: [{code: "A", doctor: "Abdullah Abdul Aziz Al Hajri"}, {code: "B", doctor: "Smart Health Co."}, {code: "C", doctor: "Walid Hamad Ashwi Raheel"}] },
                        { floor: 3, codes: [{code: "A+B", doctor: "Amr Nabil Qutb"}, {code: "C", doctor: "Oxcana Bogdanovic"}] },
                        { floor: 4, codes: [{code: "A", doctor: "Hassaan A Jaber & Obaid Metni"}, {code: "B", doctor: "Mohamed Youssef Al Eissa"}, {code: "C", doctor: "Dr. Mariam Abed Ali Al-Turki"}] }
                    ]
                },
                {
                    name: "Al Aseel International",
                    floors: [
                        { floor: 7, codes: [{code: "C", doctor: "Daniel Alain"}] },
                        { floor: 8, codes: [{code: "A", doctor: "Abdullah Abdul Rahman Al Hassan"}, {code: "B", doctor: "Hossam Mohamed El Badri"}, {code: "C", doctor: "Mustafa Samy Al Kaddousy"}] },
                        { floor: 9, codes: [{code: "A", doctor: "Nasser Faisal Al Mutairy"}, {code: "B", doctor: "Andro George Mikha'eel"}, {code: "C", doctor: "Dr. Noor Aladdin Alomar & Dr. Aya Samara"}] },
                        { floor: 10, codes: [{code: "A+B", doctor: "Dr. Ali Al-Mukaimi & Nisreen Baeij"}, {code: "C", doctor: "Dr. Ali Al-Mukaimi"}] }
                    ]
                },
                {
                    name: "Yarow - Polyclinic",
                    floors: [
                        { floor: 11, codes: [{code: "A", doctor: "Dr. Ahmed Abdulsamad Yehya Jassem"}, {code: "B", doctor: "Dr. Osamah J M Albaker"}, {code: "C", doctor: "Hossam Mohamed El Badri"}] },
                        { floor: 12, codes: [{code: "A", doctor: "Ahmed Mohamed Ahmed Ibrahim"}, {code: "B", doctor: "Sale Abdul Ghaffar Ma'arafie"}, {code: "C", doctor: "Adnan Ibrahim Ibrahim"}] }
                    ]
                },
                {
                    name: "Fourth Medical Center",
                    floors: [
                        {floor: 1, codes: [{code: "A", doctor: "Salam Attar"}]}, {floor: "2-3", codes: [{code: "A", doctor: "One Day to Manage Projects Co."}]}, {floor: "4-5", codes: [{code: "A", doctor: "Athba Co."}]}, {floor: 6, codes: [{code: "A", doctor: "Health Care Co."}]}, {floor: 7, codes: [{code: "A", doctor: "Abdul Aziz Fahad Al Mezeiny"}]}, {floor: 13, codes: [{code: "A", doctor: "Revolution Medical Co."}]}, {floor: 14, codes: [{code: "A", doctor: "Dr. Farouk Alzoubani"}]}, {floor: 15, codes: [{code: "A", doctor: "Assem Drwesh Mostafa Abdulnabi"}]}, {floor: 16, codes: [{code: "A", doctor: "One Day to Manage Projects Co."}]}, {floor: 17, codes: [{code: "A", doctor: "Dr. Abdullah Sadad Sabri Al-Ozairi"}]}, {floor: "18-19", codes: [{code: "A", doctor: "Gulf Care Co."}]}
                    ]
                },
                {
                    name: "Medical Harbour",
                    floors: [
                        {floor: 1, codes: [{code: "C", doctor: "Moaeyed Zaid Al Saq'abi"}]}, {floor: 2, codes: [{code: "C", doctor: "Mohamed Abdul Majid Hassan"}]}, {floor: 3, codes: [{code: "C", doctor: "Salah El Din Mohamed El Sherbini"}]}, {floor: 4, codes: [{code: "C", doctor: "Youssef Al Khleify/Rawan Al Khatib"}]}, {floor: 8, codes: [{code: "C", doctor: "Amir Eissa Attia Killa"}]}, {floor: 9, codes: [{code: "C", doctor: "Dr. Hesham Mohamed Yassin Ibrahim"}]}, {floor: 10, codes: [{code: "C", doctor: "Med Vision Medical Services"}]}, {floor: 11, codes: [{code: "C", doctor: "Fatmah Mohamed Badawy"}]}, {floor: 12, codes: [{code: "C", doctor: "Othman Youssef Al Mas'oud"}]}, {floor: 13, codes: [{code: "C", doctor: "Btissam Ibn Kiran"}]}, {floor: 14, codes: [{code: "C", doctor: "Misha'al Al Dahsh"}]}, {floor: 15, codes: [{code: "C", doctor: "Amal Al Shaiji / Faisal Al Terkeet"}]}, {floor: 16, codes: [{code: "C", doctor: "Signofa Co./Ahmed Eissa"}]}, {floor: 17, codes: [{code: "C", doctor: "Waleed Hamid Raheel"}]}, {floor: 18, codes: [{code: "C", doctor: "Eman Ghorab"}]}, {floor: 19, codes: [{code: "C", doctor: "Emad Morkos/Ahmed Youssef"}]}, {floor: 20, codes: [{code: "C", doctor: "Mohamed Al Kolk"}]}, {floor: 21, codes: [{code: "C", doctor: "Youssef Al Khleify"}]}
                    ]
                },
                {
                    name: "Med Marine",
                    floors: [
                        {floor: 5, codes: [{code: "A", doctor: "Fatima Ne'ma Al Awadhi"}, {code: "B", doctor: "Mohamed As'ad Eid/Wael Bezrah"}] },
                        {floor: 6, codes: [{code: "A+B", doctor: "Mohamed Youssef Al Sabty"}]}, {floor: 7, codes: [{code: "A+B", doctor: "Mostafa Mohamed Tomsu"}]}
                    ]
                },
                {
                    name: "JOYA - Polyclinic",
                    floors: [
                        {floor: 8, codes: [{code: "A", doctor: "Ihab Mohamed Younes Omar"}, {code: "B", doctor: "Huda Mahmoud Selim"}] },
                        {floor: 9, codes: [{code: "A+B", doctor: "Berlin Co./Mohamed Riyadh"}]}, {floor: 10, codes: [{code: "A+B", doctor: "Shehta Mostafa Ze'reb"}]}
                    ]
                },
                { name: "Med Grey", floors: [{floor: 5, codes: [{code: "A", doctor: "Dr. Amr Nabil Qutb"}]}, {floor: "6-7", codes: [{code: "A", doctor: "Dr. Shehta Mostafa Zurub"}]}] },
                {
                    name: "Aram - Polyclinic",
                    floors: [
                        {floor: 2, codes: [{code: "A+B", doctor: "Dalia/Mina/Osama/Mahmoud"}]}, {floor: 3, codes: [{code: "A+B", doctor: "Ayman/Islam"}]}, {floor: 4, codes: [{code: "A", doctor: "Mohamed Al Sayyad"}, {code: "B", doctor: "Mohamed Al Sayyad"}] }, {floor: 5, codes: [{code: "A", doctor: "Bishoy/Mina/Zaher"}, {code: "B", doctor: "Nasser/Mohamed"}] }, {floor: 6, codes: [{code: "A", doctor: "Munira/Anjoud"}, {code: "B", doctor: "Munira/Anjoud"}] }, {floor: 7, codes: [{code: "A+B", doctor: "Sondos Ghaneim"}]}, {floor: 8, codes: [{code: "A", doctor: "Marina/Mary/Mariana"}, {code: "B", doctor: "Dr. Mohammed Salem"}] }, {floor: 9, codes: [{code: "A", doctor: "Rwda Ahmed"}, {code: "B", doctor: "Marawan Essam"}]}
                    ]
                }
            ]
        }
    ]
};

function createBranch(nodeData, nodeClass) {
    const listItem = document.createElement('li');
    const nodeDiv = document.createElement('div');
    nodeDiv.className = `node ${nodeClass}`;

    let title;
    if (nodeClass === 'medical-labs') title = `<h3>${nodeData.name}</h3>`;
    else title = `<h4>${nodeData.name}</h4>`;
    nodeDiv.innerHTML = title;
    listItem.appendChild(nodeDiv);

    const children = nodeData.children || nodeData.floors;
    
    if (children && children.length > 0) {
        // This node has children, so it's expandable.
        const toggleBtn = document.createElement('span');
        toggleBtn.className = 'toggle-btn';
        toggleBtn.textContent = '[-]'; // Start expanded
        nodeDiv.appendChild(toggleBtn);
        
        nodeDiv.addEventListener('click', () => {
            // Toggle the 'collapsed' class on the parent LI element
            listItem.classList.toggle('collapsed');
            // Update the button text
            toggleBtn.textContent = listItem.classList.contains('collapsed') ? '[+]' : '[-]';
        });

        const childrenList = document.createElement('ul');
        children.forEach(child => {
            if (child.name) {
                const nextClass = (nodeClass === 'medical-labs') ? 'clover' : 'clinic';
                childrenList.appendChild(createBranch(child, nextClass));
            } else if (child.floor) {
                childrenList.appendChild(createFloorBranch(child));
            }
        });
        listItem.appendChild(childrenList);
    } else {
        // This is a leaf node, not clickable to expand/collapse.
        nodeDiv.classList.add('leaf');
    }
    return listItem;
}

function createFloorBranch(floorData) {
    const floorListItem = document.createElement('li');
    const floorDiv = document.createElement('div');
    floorDiv.className = 'node floor';
    floorDiv.innerHTML = `<h5>Floor ${floorData.floor}</h5>`;
    floorListItem.appendChild(floorDiv);

    if (floorData.codes && floorData.codes.length > 0) {
        // This floor node has children (codes)
        const toggleBtn = document.createElement('span');
        toggleBtn.className = 'toggle-btn';
        toggleBtn.textContent = '[-]';
        floorDiv.appendChild(toggleBtn);

        floorDiv.addEventListener('click', () => {
            floorListItem.classList.toggle('collapsed');
            toggleBtn.textContent = floorListItem.classList.contains('collapsed') ? '[+]' : '[-]';
        });

        const codesList = document.createElement('ul');
        floorData.codes.forEach(code => {
            const codeListItem = document.createElement('li');
            const codeDiv = document.createElement('div');
            // Clinic codes are leaf nodes
            codeDiv.className = 'node clinic-code leaf'; 
            codeDiv.innerHTML = `
                <strong>Clinic ${code.code}</strong><br>
                <small>${code.doctor}</small>
            `;
            codeListItem.appendChild(codeDiv);
            codesList.appendChild(codeListItem);
        });
        floorListItem.appendChild(codesList);
    } else {
         floorDiv.classList.add('leaf');
    }
    return floorListItem;
}

function initializeChart() {
    const chartContainer = document.getElementById('chart');
    if (!data) return;

    chartContainer.className = 'tree';
    const rootList = document.createElement('ul');
    const rootNode = createBranch(data, 'medical-labs');
    
    rootList.appendChild(rootNode);
    chartContainer.appendChild(rootList);
}

// Render the chart when the script loads
initializeChart();