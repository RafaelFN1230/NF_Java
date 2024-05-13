"use client";

import Image from "next/image";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import logo from "@/assets/images/svg/logo.svg";
import menu_icon from "@/assets/images/svg/menu_icon.svg";
import perfil_icon from "@/assets/images/svg/user.svg";
import dashboard_icon from "@/assets/images/svg/home_icon.svg";
import vagas_icon from "@/assets/images/svg/clipboard.svg";
import LogOut_icon from "@/assets/images/svg/log-out.svg";
import HeaderViewModel from "@/viewModel/header.ViewModel";

export default function Header() {
  const { NavigateTo } = HeaderViewModel();

  return (
    <header className="bg-gray-100 w-full h-[10vh] flex items-center justify-between shadow-sm">
      <div>
        <Image
          src={logo}
          width={150}
          height={150}
          alt="Logo Wyden"
          className="m-10"
        />
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="m-10 bg-inherit hover:bg-gray-400 rounded-full border-none"
            >
              <Image
                src={menu_icon}
                width={20}
                height={20}
                alt="Ícone do menu"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mx-10">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                className=""
                onClick={() => NavigateTo("/perfil")}
              >
                <Image
                  src={perfil_icon}
                  width={20}
                  height={20}
                  alt="Ícone Perfil"
                  className="mr-3"
                />
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem className="" onClick={() => NavigateTo("/")}>
                <Image
                  src={dashboard_icon}
                  width={20}
                  height={20}
                  alt="Ícone Dashboard"
                  className="mr-3"
                />
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem
                className=""
                onClick={() => NavigateTo("/vagas")}
              >
                <Image
                  src={vagas_icon}
                  width={20}
                  height={20}
                  alt="Ícone Vagas"
                  className="mr-3"
                />
                Vagas
              </DropdownMenuItem>
              <DropdownMenuItem
                className=""
                onClick={() => NavigateTo("/login")}
              >
                <Image
                  src={LogOut_icon}
                  width={20}
                  height={20}
                  alt="Ícone Sign Out"
                  className="mr-3"
                />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
