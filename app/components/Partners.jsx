const languages = [
  { name: 'HTML', logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
  { name: 'CSS', logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
  { name: 'JavaScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
  { name: 'Python', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
  { name: 'Java', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png' },
  { name: 'C++', logo: 'https://cdn-icons-png.flaticon.com/512/919/919836.png' },
];

const CollaborationSection = () => {
  return (
    <section className="collaboration-section">
      <h2 className="collaboration-header ">
        Tədris etdiyimiz texnalogiyalar
      </h2>
      <div className="collaboration-logos pt-7">
        {
          languages.map(lang => (
            <img src={lang.logo} alt={lang.name} className="collab-logo" />
          ))
        }
      </div>
    </section>
  );
};

export default CollaborationSection;
