import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const comments = [
  {
    ratingNumbers: 4,
    userName: "Tony Stark",
    userImage:
      "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png",
    publishDate: 1713341234567,
    message:
      "J’utilise cette huile essentielle depuis quelques semaines et je suis vraiment impressionnée par ses bienfaits. Son parfum est à la fois apaisant et rafraîchissant. Parfaite pour mes moments de détente ou pour assainir l’air ambiant. Je recommande à 100% !",
  },
  {
    ratingNumbers: 5,
    userName: "Natasha Romanoff",
    userImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwueUJWYGJXz9r6LfTRTj3DbOsgFJQbyHt_g&s",
    publishDate: 1715841234567,
    message:
      "Une huile essentielle d’une grande qualité ! Elle m’aide beaucoup pour mes séances de méditation. L’odeur est subtile, pas trop envahissante, et dure dans le temps. Une vraie pépite.",
  },
  {
    ratingNumbers: 3,
    userName: "Bruce Banner",
    userImage:
      "https://preview.redd.it/which-bruce-banner-actor-and-hulk-design-do-yall-prefer-v0-jeapm28ka1k91.jpg?width=640&crop=smart&auto=webp&s=9de62f12dba2682e62b5720b5214a6da2d9abf5a",
    publishDate: 1716001234567,
    message:
      "Bon produit dans l’ensemble, mais je m’attendais à une senteur un peu plus prononcée. Elle reste cependant efficace pour calmer les tensions après une journée stressante.",
  },
];

const Comment = () => {
  const t = useTranslations("label.comments");
  const tProduct = useTranslations("product");
  return (
    <>
      <div>
        <Typography variant="h4" className="font-normal">
          {`${comments.length} ${t("commentNumber")}`}
        </Typography>
        {comments.map((comment, index) => (
          <div key={index} className="flex py-4 gap-6">
            <div className="w-[70px] h-[70px] rounded-full">
              <img
                src={comment.userImage}
                className="rounded-full w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex gap-6">
                <Typography variant="h5" className="font-normal">
                  {comment.userName}
                </Typography>
                <Typography
                  variant="h5"
                  className="font-normal text-[var(--tertiary)]"
                >
                  {format(new Date(comment.publishDate), "dd MMM yyyy, hh:MM", {
                    locale: fr,
                  })}
                </Typography>
              </div>
              <Typography variant="p" className="font-normal">
                {comment.message}
              </Typography>
            </div>
            <Button
              data-slot="carousel-previous"
              variant="outline"
              size="lg"
              className="rounded-full cursor-pointer border-primary"
            >
              <span>{t("respond")}</span>
            </Button>
          </div>
        ))}
      </div>
      <div>
        <Typography variant="h4" className="font-normal my-4">
          {t("addComment")}
        </Typography>
        <Typography variant="p" className="font-normal mb-4">
          {tProduct("opinionRules")}
        </Typography>
        <Input
          className="rounded-full h-10 text-primary placeholder:text-[#d3d3d3] mb-4"
          placeholder={tProduct("emailPlaceholder")}
        />
        <Input
          className="rounded-full h-10 text-primary placeholder:text-[#d3d3d3] mb-4"
          placeholder={tProduct("namePlaceholder")}
        />
        <Textarea
          className="rounded-xl h-10 text-primary placeholder:text-[#d3d3d3] mb-4"
          placeholder={tProduct("opinionPlaceholder")}
        />
        <div>
          <RadioGroup defaultValue="saveOpinion" className="grid gap-4">
            <label className="flex items-center space-x-4">
              <RadioGroupItem value="saveOpinion" />
              <span>{tProduct("saveOpinion")}</span>
            </label>
          </RadioGroup>
        </div>
        <div className="w-full py-6">
          <Button
            data-slot="carousel-previous"
            variant="default"
            size="lg"
            className="rounded-full px-8 cursor-pointer w-full"
          >
            <span>{t("submit")}</span>
          </Button>
        </div>
      </div>
    </>
  );
};
export default Comment;
