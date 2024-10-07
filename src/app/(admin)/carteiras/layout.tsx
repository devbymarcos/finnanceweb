import { Button } from "@/components/ui/button";
import CreateIcon from "@/components/icons/CreateIcon";
import { ArrowLeft, List, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const layoutCategory = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-base-black text-xl mb-4 font-bold dark:text-base-white">
          Carteiras
        </h1>
        <nav
          className="mb-12 flex justify-end
      "
        >
          <ul className="flex gap-4">
            <li>
              <Button asChild className="bg-base-secondary">
                <Link href="/carteiras/list">
                  <ArrowLeft color="#fff" size="16" />
                </Link>
              </Button>
            </li>
            <li>
              <Button asChild className="bg-base-secondary">
                <Link href="/carteiras/nova">
                  <Plus color="#fff" size="16" />
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </section>
  );
};

export default layoutCategory;
