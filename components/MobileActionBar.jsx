import { Phone } from "lucide-react";
import { telLink } from "@/lib/contact";
import OrderButton from "./OrderButton";
import WhatsAppIcon from "./WhatsAppIcon";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-ink/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2 gap-2 min-[360px]:gap-3">
        <a
          href={telLink}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-2 py-3.5 text-[13px] font-bold whitespace-nowrap text-cream active:bg-white/10 min-[360px]:text-sm"
        >
          <Phone className="size-4 shrink-0" aria-hidden="true" />
          Call Now
        </a>
        <OrderButton className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-2 py-3.5 text-[13px] font-bold whitespace-nowrap text-ink active:brightness-90 min-[360px]:gap-2 min-[360px]:text-sm">
          <WhatsAppIcon className="size-4" />
          WhatsApp Order
        </OrderButton>
      </div>
    </div>
  );
}
