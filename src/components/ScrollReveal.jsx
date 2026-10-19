import { motion } from 'framer-motion';

/**
 * Reusable scroll-triggered reveal wrapper with dynamic cubic-bezier easing.
 */
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  yOffset = 40,
  viewportAmount = 0.2,
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: viewportAmount }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Container for staggered child reveal animations in cards/grids.
 */
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.12,
  delayChildren = 0.1,
  viewportAmount = 0.15,
  once = true,
  ...props
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual animated item inside a StaggerContainer.
 */
export function StaggerItem({
  children,
  className = '',
  yOffset = 35,
  duration = 0.65,
  ...props
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

/**
 * Semantic section wrapper with scroll reveal.
 */
export function SectionWrapper({
  id,
  children,
  className = '',
  delay = 0,
  ...props
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export default ScrollReveal;

