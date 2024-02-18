import Image from "next/image";
import React from "react";

const stats = [
  {
    id: "stat-1",
    icon: "/form-icon.svg",
    title: "free application service",
  },
  {
    id: "stat-2",
    icon: "/university-icon.svg",
    title: "100+ university partners",
  },
  {
    id: "stat-3",
    icon: "/graduation-icon.svg",
    title: "exclusive scholarships",
  },
  {
    id: "stat-4",
    icon: "/airplane-icon.svg",
    title: "Visa Support service",
  },
  {
    id: "stat-5",
    icon: "/hotel-icon.svg",
    title: "Accommodation support service",
  },
];

function Stats() {
  return (
    <section className="stats__section">
      <h2 className="headtext">
        Why Choose <br /> The Study Vista
      </h2>
      <div className="stats__list">
        {stats.map((item) => (
          <div key={item.id} className="stat__box">
            <span className="stat__box-icon">
              <Image src={item.icon} width={15} height={18} alt="stat icon" />
            </span>
            <span className="stat__box-title">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
