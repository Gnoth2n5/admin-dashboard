import { ChevronRightIcon, StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Review data for mapping
const reviewData = [
  {
    id: 1,
    name: "Jons Sena",
    daysAgo: "2 days ago",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    rating: 4.5,
    profileImage: "/placeholder-1.png",
    foodImage: "/mask-group.png",
  },
  {
    id: 2,
    name: "Sofia",
    daysAgo: "2 days ago",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    rating: 40,
    profileImage: "/placeholder-2.png",
    foodImage: "/mask-group-1.png",
  },
  {
    id: 3,
    name: "Anandreansyah",
    daysAgo: "2 days ago",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    rating: 4.5,
    profileImage: "/placeholder-3.png",
    foodImage: "/mask-group-2.png",
  },
];

export const CustomerReviewSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 relative">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-heading-heading-1 text-theme-colordark text-[length:var(--heading-heading-1-font-size)] tracking-[var(--heading-heading-1-letter-spacing)] leading-[var(--heading-heading-1-line-height)] [font-style:var(--heading-heading-1-font-style)]">
              Customer Review
            </h2>
            <p className="font-heading-heading-4 text-theme-colorgrey-5 text-[length:var(--heading-heading-4-font-size)] tracking-[var(--heading-heading-4-letter-spacing)] leading-[var(--heading-heading-4-line-height)] [font-style:var(--heading-heading-4-font-style)]">
              Eum fuga consequuntur utadsjn et.
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="w-[50px] h-[50px] bg-theme-colorwhite rounded-[14px] rotate-180"
            >
              <ChevronRightIcon className="w-6 h-6 rotate-180" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-[50px] h-[50px] bg-theme-colorwhite rounded-[14px]"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="flex gap-[57px]">
          {reviewData.map((review) => (
            <div key={review.id} className="relative w-[525px]">
              <Card className="w-[458px] rounded-[15px] shadow-[0px_4px_4px_#0000000d] bg-light-theme-colorlight">
                <CardContent className="flex flex-col items-start gap-[21px] p-[30px]">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-[54px] h-[54px] bg-cover bg-center rounded-full"
                      style={{ backgroundImage: `url(${review.profileImage})` }}
                    />
                    <div>
                      <h3 className="font-heading-heading-3 font-[number:var(--heading-heading-3-font-weight)] text-light-theme-colorbody text-[length:var(--heading-heading-3-font-size)] tracking-[var(--heading-heading-3-letter-spacing)] leading-[var(--heading-heading-3-line-height)] [font-style:var(--heading-heading-3-font-style)]">
                        {review.name}
                      </h3>
                      <p className="font-heading-heading-5 font-[number:var(--heading-heading-5-font-weight)] text-light-theme-colorgrey-6 text-[length:var(--heading-heading-5-font-size)] tracking-[var(--heading-heading-5-letter-spacing)] leading-[var(--heading-heading-5-line-height)] [font-style:var(--heading-heading-5-font-style)]">
                        {review.daysAgo}
                      </p>
                    </div>
                  </div>

                  <p className="w-[248px] font-heading-heading-6 font-[number:var(--heading-heading-6-font-weight)] text-light-theme-colorbody text-[length:var(--heading-heading-6-font-size)] tracking-[var(--heading-heading-6-letter-spacing)] leading-[var(--heading-heading-6-line-height)] [font-style:var(--heading-heading-6-font-style)]">
                    {review.text}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                          key={star}
                          className="w-3 h-3 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="font-heading-heading-4 font-[number:var(--heading-heading-4-font-weight)] text-theme-colorgrey-body text-[length:var(--heading-heading-4-font-size)] text-center tracking-[var(--heading-heading-4-letter-spacing)] leading-[var(--heading-heading-4-line-height)] [font-style:var(--heading-heading-4-font-style)]">
                      {review.rating}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <img
                className="absolute w-[257px] h-[257px] top-[26px] right-0"
                alt="Food image"
                src={review.foodImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
