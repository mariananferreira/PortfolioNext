import React from "react";
import Image from 'next/image'
import mdb from '@/images/mdb.png'
import js from '@/images/js.avif'
import react from '@/images/react.png'
import three from '@/images/three.png'
import html from '@/images/html.png'
import css from '@/images/css.svg'
import java from '@/images/java.png'
import ts from '@/images/ts.svg'
import node from '@/images/node.svg'
import python from '@/images/python.jpeg'
import tail from '@/images/tail.svg'
import redux from '@/images/redux.png'
import sql from '@/images/sql.png'
import next from '@/images/next.svg'
import spring from '@/images/spring.png'
import git from '@/images/git.svg'
import pega from '@/images/pega.png'
import post from '@/images/post.png'


const people = [
  {
    imageUrl: js,
    tooltip: "JavaScript"
  },
  {
    imageUrl: react,
    tooltip: "React"
  },
  {
    imageUrl: three,
    tooltip: "Three.js"
  },
  {
    imageUrl: html,
    tooltip: "HTML"
  },
  {
    imageUrl: css,
    tooltip: "CSS"
  },
  /*{
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    tooltip: "Kubernetes"
  }, */
  {
    imageUrl: java,
    tooltip: "Java"
  },
  {
    imageUrl: ts,
    tooltip: "TypeScript"
  },
  {
    imageUrl: mdb,
    tooltip: "MongoDB"
  },
  {
    imageUrl: node,
    tooltip: "Node.js"
  },
  {
    imageUrl: python,
    tooltip: "Phyton"
  },
  {
    imageUrl: sql,
    tooltip: "MySQL"
  },
  {
    imageUrl: tail,
    tooltip: "Tailwind"
  },
  /*{
    imageUrl:
      "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
    tooltip: "Docker"
  }, */
  {
    imageUrl: next,
    tooltip: "Next.js"
  },
  {
    imageUrl: spring,
    tooltip: "Springboot"
  },
  {
    imageUrl: redux,
    tooltip: "Redux"
  },
  {
    imageUrl: post,
    tooltip: "PostgreSQL"
  },
  {
    imageUrl: pega,
    tooltip: "PEGA"
  },
  {
    imageUrl: git,
    tooltip: "GIT"
  }

];

//emailjs.init('SlgE9reC5vzK-He3e');
//emailjs.sendForm('service_xbstqxs', 'template_kf1umh6', this)


export default function Technologies() {
  return (
    <section
      id="technologies"
      aria-label=""
    >

      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
            <h2 className="marginAdjust sectionTitles text-3xl font-bold tracking-tight sm:text-4xl">
              Skills
            </h2>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            {people.map(person => (
              <li key={person.name}>
                <div className="space-y-4">
                  <Image
                    className="mx-auto h-20 w-20 lg:h-24 lg:w-24 grayscale hover:grayscale-0  hover:scale-125 transition-all duration-500 ease-in-out object-contain"
                    src={person.imageUrl}
                    alt=""
                    title={person.tooltip}
                    priority
                  />
                </div>
              </li>
           ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
