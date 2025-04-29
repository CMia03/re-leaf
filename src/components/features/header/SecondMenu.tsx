import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const SecondMenuComponents = () => {
  const t = useTranslations("header");
  const hoverPeaperBerriesSubLink = [
    { label: t('heavyBlackPepper') },
    { label: t('whitePepper') },
    { label: t('dehydratedGreenPepper') },
    { label: t('pinkBerry') },
    { label: t('wildPepper') },
  ];

  const hoverAromesSubLink = [
    { label: t('naturalCinnamonExtract') },
    { label: t('naturalTurmericExtract') },
    { label: t('naturalGingerExtract') },
    { label: t('naturalCaramelExtract') },
    { label: t('naturalVanillaExtract') },
    { label: t('naturalVanillaCaviar') },
  ];

  const hoverNaturalFoodAgentsSubLink = [
    { label: t('naturalColorants') },
    { label: t('naturalFlavors') },
    { label: t('naturalPreservatives') },
    { label: t('naturalThickenersGellingAgents') },
    { label: t('naturalAntioxidants') },
    { label: t('naturalAcidifiersAndPhCorrectors') },
    { label: t('naturalSweeteners') },
  ];

  const hoverSpicySubLink = [
    { label: t('conventionalCinnamonPowder') },
    { label: t('organicCinnamonBark') },
    { label: t('conventionalCinnamonBark') },
    { label: t('cinnamonLeaf') },
    { label: t('organicTurmericPowder') },
    { label: t('conventionalTurmericPowder') },
    { label: t('wholeDriedPiliPiliGm') },
    { label: t('wholeDriedPiliPiliPm') },
    { label: t('wholeDriedBirdsBeakChili') },
    { label: t('chiliPowder') },
    { label: t('clove') },
    { label: t('organicGingerPowder') },
    { label: t('conventionalGingerPowder') },
    { label: t('cardamom') },
    { label: t('nutmeg') },
    { label: t('vanillaPod') },
    { label: t('vanillaPowder') },
  ];

  return (
    <div className="flex gap-2 justify-center items-center h-[61px] border-b-1 border-b-[var(--border)]">
      <picture>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Typography variant="D1" className="cursor-pointer">{t("peaperBerries")}</Typography>

              </NavigationMenuTrigger>
              <NavigationMenuContent className="max-h-[15em] overflow-y-auto">
                {hoverPeaperBerriesSubLink.map((spicyLink, index) => (
                  <NavigationMenuLink key={index} className="hover:text-[#B6C335]">
                    <Typography variant="D1" className="unset text-sm rounded-2 cursor-pointer capitalize text-nowrap">{spicyLink.label}</Typography>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </picture>

      <picture>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Typography variant="D1" className="cursor-pointer">{t("spicy")}</Typography>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[50em] grid grid-cols-1 md:grid-cols-3 gap-2 ">
                {hoverSpicySubLink.map((spicyLink, index) => (
                  <NavigationMenuLink key={index} className="width-[max-content] hover:text-[#B6C335]">
                    <Typography variant="D1" className="unset text-sm rounded-2 cursor-pointer capitalize text-nowrap">{spicyLink.label}</Typography>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

      </picture>
      <picture>


        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Typography variant="D1" className="cursor-pointer">{t("herbs")}</Typography>              </NavigationMenuTrigger>
              <NavigationMenuContent className="max-h-[25em] flex flex-col gap-2 overflow-y-auto">
                {hoverAromesSubLink.map((spicyLink, index) => (
                  <NavigationMenuLink key={index} className="hover:text-[#B6C335]">
                    <Typography variant="D1" className="unset text-sm rounded-2 cursor-pointer capitalize text-nowrap">{spicyLink.label}</Typography>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </picture>
      <picture>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Typography variant="D1" className="cursor-pointer px-2" >{t("essentialOiles")}</Typography>



              </NavigationMenuLink>

            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </picture>
      <picture>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Typography variant="D1" className="cursor-pointer">{t("naturalFoodAgents")}</Typography>

              </NavigationMenuTrigger>
              <NavigationMenuContent className="max-h-[20em] overflow-y-auto">
                {hoverNaturalFoodAgentsSubLink.map((spicyLink, index) => (
                  <NavigationMenuLink key={index} className="hover:text-[#B6C335]">
                    <Typography variant="D1" className="unset text-sm rounded-2 cursor-pointer capitalize text-nowrap">{spicyLink.label}</Typography>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </picture>

    </div>
  );
};
export default SecondMenuComponents;
