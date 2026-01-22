'use client';
import {
  motion,
  useInView,
  Variant,
  Transition,
  UseInViewOptions,
} from 'framer-motion';
import React, { ReactNode, useRef, forwardRef } from 'react';

type InViewProps = {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
  as?: React.ElementType;
};

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function InViewComponent(
  {
    children,
    variants = defaultVariants,
    transition,
    viewOptions,
    as: Component = 'div',
  }: InViewProps,
  ref: React.Ref<HTMLElement>
) {
  const localRef = useRef<HTMLElement>(null);
  const inViewRef = ref || localRef;
  const isInView = useInView(inViewRef as React.RefObject<HTMLElement>, viewOptions);

  const MotionComponent = motion[Component as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      ref={inViewRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
    >
      {children}
    </MotionComponent>
  );
}

export const InView = forwardRef(InViewComponent);
