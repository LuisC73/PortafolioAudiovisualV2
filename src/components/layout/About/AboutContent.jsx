import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutContent() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.4,
          delay: 0.5,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: 50,
      });
    }
  }, [inView]);

  return (
    <section className="aboutContent" id="about" ref={ref}>
      <div className="aboutContent__wrapper">
        <motion.article
          className="aboutContent__article aboutContent__article--left"
          animate={animation}
        >
          <h3 className="aboutContent__h3">
            Sobre <span className="aboutContent__span">Mí</span>
          </h3>
          <p className="aboutContent__p aboutContent__p--left">
            ¡Hola! Soy Ana Manuela Ramírez, apasionada y entregada a la
            producción de piezas audiovisuales y postproducción de tipo
            comercial y documental, además hago fotografía documental y en mis
            tiempos libres y creativos me gusta practicar la fotografía
            paisajística. Al ejercer mi vocación, disfruto cada producción,
            pongo a prueba mis conocimientos y adquiero más experiencia.
          </p>
        </motion.article>
        <motion.article
          className="aboutContent__article aboutContent__article--right"
          animate={animation}
        >
          <h3 className="aboutContent__h3 aboutContent__h3--right">
            Experi<span className="aboutContent__span">encia</span>
          </h3>
          <p className="aboutContent__p aboutContent__p--right">
            Actualmente hago parte del equipo de comunicaciones de la empresa
            Agencias Noble donde hago la producción y edición de contenidos, con
            programas profesionales de la suite de Adobe. Trabajé también con el
            equipo de logística 4E realizando la producción fotográfica para el
            Ministerio de Educación en un evento deportivo Nacional (Juegos
            Deportivos Nacionales del Magisterio 2022).
          </p>
        </motion.article>
        <motion.p className="aboutContent__text" animate={animation}>
          "A la hora de producir ideas audiovisuales, es importante para mí
          apropiarme de ellas y sentir primero lo que quiero transmitir."
        </motion.p>
      </div>
    </section>
  );
}

export default AboutContent;
