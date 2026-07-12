import Image from "next/image";

export function FloatingAvatar() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
      <Image
        src="/images/profile.jpg"
        alt="Boromey Han"
        width={56}
        height={56}
        className="rounded-full border-2 border-background object-cover shadow-[var(--shadow-lifted)]"
      />
    </div>
  );
}
