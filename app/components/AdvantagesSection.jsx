// AdvantagesSection.js
import React from 'react';

function AdvantagesSection() {
  const advantages = [
    {
      title: 'Akademik Transkript',
      description: 'Sizin bilik və bacarıqlarınızın hansı dərəcədə olduğunu göstərir.',
      iconSrc: 'https://code.edu.az/wp-content/uploads/2024/03/zemanet_png.webp' // replace with actual image URL
    },
    {
      title: 'Praktiki tədris metodu',
      description: 'Dərs saatlarından əlavə olaraq təşkil olunan Lab günləri təşkil olunur.',
      iconSrc: 'https://code.edu.az/wp-content/uploads/2024/03/zemanet_png.webp' // replace with actual image URL
    },
    {
      title: 'Buraxılış layihəsi',
      description: 'Təqdimat təhsili boyunca keçirilən bütün mövzuları özündə cəmləyir.',
      iconSrc: 'https://code.edu.az/wp-content/uploads/2024/03/zemanet_png.webp' // replace with actual image URL
    },
    {
      title: 'Beynəlxalq sertifikasiya',
      description: 'Tədrisi uğurla başa vuranlar beynəlxalq sertifikasiyaya daxil olma şansı əldə edirlər.',
      iconSrc: 'https://code.edu.az/wp-content/uploads/2024/03/zemanet_png.webp' // replace with actual image URL
    },
    {
      title: 'Zəmanətli təhsil',
      description: 'Proqramı mənimsəmədiyini düşünənlər təkrar dərsi keçə bilirlər.',
      iconSrc: 'https://code.edu.az/wp-content/uploads/2024/03/zemanet_png.webp' // replace with actual image URL
    },
    {
      title: 'Mentor sistemi',
      description: 'Təhsildə öyrəndiklərini gücləndirmək üçün xüsusi mentorlar təyin edilir.',
      iconSrc: 'https://code.edu.az/wp-content/uploads/2024/03/zemanet_png.webp' // replace with actual image URL
    }
  ];

  return (
    <div className="advantages-section">
      <h2 className="advantages-title">Code Academy’nin üstünlükləri</h2>
      <div className="advantages-grid">
        {advantages.map((advantage, index) => (
          <AdvantageCard
            key={index}
            title={advantage.title}
            description={advantage.description}
            iconSrc={advantage.iconSrc}
          />
        ))}
      </div>
    </div>
  );
}

const AdvantageCard = ({ iconSrc, title, description }) => {
    return (
      <div className="advantage-card">
        <img src={iconSrc} alt={title} className="advantage-icon" />
        <h3 className="advantage-title">{title}</h3>
        <p className="advantage-description">{description}</p>
      </div>
    );
  };

export default AdvantagesSection;
