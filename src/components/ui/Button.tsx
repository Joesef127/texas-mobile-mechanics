import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface BaseButtonProps {
  variant?: "red" | "line";
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends BaseButtonProps {
  href: string;
  external?: boolean;
}

interface NativeButtonProps
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant = "red", className = "", children } = props;

  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-[26px] py-[15px] rounded-[4px] font-body font-semibold text-[17px] leading-none no-underline border-2 cursor-pointer transition-all duration-200 ease-brand active:scale-[0.97] max-xs:w-full";

  const variantClasses =
    variant === "red"
      ? "bg-brand-red text-white border-transparent hover:bg-brand-redDark"
      : "border-current text-inherit bg-transparent hover:bg-hover";

  const combined = `${baseClasses} ${variantClasses} ${className}`.trim();

  if ("href" in props && props.href !== undefined) {
    const isInternal =
      props.href.startsWith("/") && !props.external;

    if (isInternal) {
      return (
        <Link href={props.href} className={combined}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={props.href}
        className={combined}
        target={props.external ? "_blank" : undefined}
        rel={props.external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  const { variant: _v, className: _c, children: _ch, ...buttonRest } = props;
  return (
    <button className={combined} {...buttonRest}>
      {children}
    </button>
  );
}
