import React from 'react'

const cardData = [
    {
        title: 'Front-end əsaslı full stack',
        description: 'Gələcəyin siması burada müəyyənləşir.',
        imageSrc: 'https://code.edu.az/wp-content/uploads/2023/10/Back-End_png.webp'
    },
    {
        title: 'Back-end əsaslı full stack',
        description: 'Hər uğurlu işin arxasında sən dayan.',
        imageSrc: 'https://code.edu.az/wp-content/uploads/2021/08/Graphic-Design-1_png.webp'
    },
    {
        title: 'Qrafik Dizayn və Vizual Kodlama',
        description: 'Gələcəyini dizayn etməyə bu gündən başla',
        imageSrc: 'https://code.edu.az/wp-content/uploads/2021/07/Digital-Memarliq_png.webp'
    },
    {
        title: 'UX/UI Dizayn',
        description: 'Digital istifadəçi təcrübəsini hər kəsə...',
        imageSrc: 'https://code.edu.az/wp-content/uploads/2023/10/Back-End_png.webp'
    },
    {
        title: 'Front-end əsaslı full stack',
        description: 'Gələcəyin siması burada müəyyənləşir.',
        imageSrc: 'https://code.edu.az/wp-content/uploads/2023/10/Back-End_png.webp'
    },
    {
        title: 'Back-end əsaslı full stack',
        description: 'Hər uğurlu işin arxasında sən dayan.',
        imageSrc: 'https://code.edu.az/wp-content/uploads/2021/07/Digital-Memarliq_png.webp'
    },
    {
        title: 'Qrafik Dizayn və Vizual Kodlama',
        description: 'Gələcəyini dizayn etməyə bu gündən başla',
        imageSrc: 'https://code.edu.az/wp-content/uploads/2023/10/Back-End_png.webp'
    },
    {
        title: 'UX/UI Dizayn',
        description: 'Digital istifadəçi təcrübəsini hər kəsə...',
        imageSrc: 'https://code.edu.az/wp-content/uploads/2021/08/Graphic-Design-1_png.webp'
    }
];


const EducationArea = () => {


    return (
        <div style={{
            backgroundColor: "#f4f6fa"
        }} className='flex justify-center w-full items-center'>
            <div className="ea_cards">
                {cardData.map((card, index) => (
                    <div className="hover-card ">
                        <div className="hover-card-content">
                          <div className="hover-card-title-div">
                          <h2 className="hover-card-title">{card.title}</h2>
                          </div>
                            <div className='hover-card-image-div'>
                                <img src={card.imageSrc} alt={card.title} className="hover-card-image" />
                            </div>
                            <p className="hover-card-description">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Arrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="#62717C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    )
}

export default EducationArea