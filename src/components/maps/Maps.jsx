import React from "react";

const Maps = () => {
  return (
    <section className="my-[20px] md:my-10 h-[300px] md:h-[450px] px-4 md:px-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d41320.933169139156!2d90.36173425483963!3d23.73707131367668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCreative%20IT%20Institute%2C%20dhanmondi!5e0!3m2!1sen!2sbd!4v1748460371943!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Maps;
