"use client";

export default function UnrealLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // body에 data-transparent 속성 추가
  if (typeof document !== 'undefined') {
    document.body.setAttribute('data-transparent', 'true');
  }

  return <>{children}</>;
} 