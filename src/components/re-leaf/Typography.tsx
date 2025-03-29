// src/components/ui/Typography.
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import { marcellus, sansDM } from "../../../public/fonts/config/config";

type PolymorphicAsProp<E extends ElementType> = {
  as?:
    | E
    | React.ComponentType<Omit<ComponentPropsWithoutRef<E>, "as">>
    | React.FunctionComponent<Omit<ComponentPropsWithoutRef<E>, "as">>;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  Omit<ComponentPropsWithoutRef<E>, "as"> & PolymorphicAsProp<E>
>;

const typographyVariants = cva("", {
  variants: {
    variant: {
      title: `scroll-m-20 text-[40px] font-extrabold leading-[60px] lg:text-[40px] stretch-extra-condensed font-caption ${marcellus.className}`,
      h1: `scroll-m-20 text-[44px] font-extrabold leading-[60px] lg:text-[40px] stretch-extra-condensed font-caption ${marcellus.className}`,
      h1_mobile: `scroll-m-20 text-[24px] leading-[44px] font-extrabold md:leading-[60px] lg:text-[40px] stretch-extra-condensed font-caption ${marcellus.className}`,
      h2: `scroll-m-20 border-b pb-2 text-[36px] font-semibold  transition-colors first:mt-0 font-caption ${marcellus.className}`,
      h3: `scroll-m-20 text-[30px] font-semibold  font-caption ${marcellus.className}`,
      h4: `text-[24px] font-semibold  font-caption ${marcellus.className}`,
      h5: `text-[20px] font-semibold  font-caption ${marcellus.className}`,
      h6: `text-[16px] font-semibold  font-caption ${marcellus.className}`,
      D1: `text-[16px] font-caption ${sansDM.className}`,
      h7: `text-[14px] font-normal ${sansDM.className}`,
      h8: `text-[12px] font-normal ${sansDM.className}`,
      head_font: `text-[249px] ${sansDM.className}`,
      p: ` -7 text-[16px] ${marcellus.className}`,
      base: `${sansDM.className}`,
      quote: `mt-6 border-l-2 pl-6 italic ${sansDM.className}`,
      code: `relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${sansDM.className}`,
      lead: `text-xl text-muted-foreground ${sansDM.className}`,
      large: `text-lg font-semibold ${sansDM.className}`,
      small: `text-sm font-medium leading-none ${sansDM.className}`,
      muted: `text-sm text-muted-foreground ${sansDM.className}`,
      link: `text-indigo-500 font-medium hover:underline ${sansDM.className}`,
    },
  },
  defaultVariants: {
    variant: "base",
  },
});
export type TypographyCvaProps = VariantProps<typeof typographyVariants>;

const defaultElement = "p";

const defaultElementMapping: Record<
  NonNullable<TypographyCvaProps["variant"]>,
  ElementType
> = {
  title: "h1",
  h1_mobile: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h5",
  h7: "h5",
  h8: "h5",
  D1: "p",
  p: "p",
  quote: "blockquote" as "p",
  code: "code",
  lead: "p",
  large: "p",
  small: "p",
  muted: "p",
  link: "a",
  base: "p",
  head_font: "p",
} as const;

export function Typography<E extends ElementType = typeof defaultElement>({
  as,
  children,
  className,
  variant,
  ...restProps
}: PolymorphicProps<E> & TypographyCvaProps) {
  const Component: ElementType =
    as ?? defaultElementMapping[variant ?? "base"] ?? defaultElement;

  return (
    <Component
      {...(restProps as ComponentPropsWithoutRef<E>)}
      className={cn(typographyVariants({ variant }), className)}
    >
      {children}
    </Component>
  );
}
