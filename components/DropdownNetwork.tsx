import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "../@/lib/utils"
import { Button } from "../@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../@/components/ui/popover"
 
const frameworks = [
  {
    value: "solana",
    label: "Solana",
  },
  {
    value: "binance",
    label: "Binance",
  },
  {
    value: "polygon",
    label: "Polygon",
  },
  {
    value: "ethereum",
    label: "Ethereum",
  },
  {
    value: "sharedum",
    label: "Sharedum",
  },
]


const DropdownNetwork = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
  return (
    <div> 
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger  className="bg-[#161616] border-none text-[#818181] h-14" asChild>
                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between flex px-6 py-5"
                >
                {value
                    ? frameworks.find((framework) => framework.value === value)?.label
                    : "Select Network"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full  bg-[#161616] border-none text-[#818181]">
                <Command>
                    <div className="flex flex-col justify-start px-1">

                <CommandInput className=" mx-[6px]  mt-1 rounded-md pl-1 w-full" placeholder="Search Network" />
                <CommandEmpty  className="text-zinc-500 pl-7">No Network found.</CommandEmpty>
                <CommandGroup className="text-zinc-500">
                    {frameworks.map((framework) => (
                        <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                        }}
                    >
                        <Check
                        className={cn(
                            "mr-1 h-4 w-4",
                            value === framework.value ? "opacity-100" : "opacity-0"
                            )}
                        />
                        {framework.label}
                    </CommandItem>
                    ))}
                </CommandGroup>
                    </div>
                </Command>
            </PopoverContent>
        </Popover>
</div>
  )
}

export default DropdownNetwork