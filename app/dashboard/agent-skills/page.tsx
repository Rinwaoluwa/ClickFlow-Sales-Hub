"use client"

import { AgentSkillModal } from "@/components/agent-skill-modal"
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function AgentSkillPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname =  usePathname();
    const router = useRouter();

    useEffect(() => {

        if(pathname.includes("/dashboard/agent-skills")) {
            setIsModalOpen(true);
        }

    }, [pathname])

    const hanldeCloseModal = () => {
        setIsModalOpen(false)
        router.back();
    };
  return (
    <AgentSkillModal isOpen={isModalOpen} onClose={hanldeCloseModal} />
  )
}

