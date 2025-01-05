export const SOCIAL_MEDIA_PLATFORM_ENUM = {
  FACEBOOK: "facebook",
  YOUTUBE: "youtube",
  INSTAGRAM: "instagram",
  TWITTER: "twitter",
  PINTEREST: "pinterest",
} as const;

export type SOCIAL_MEDIA_PLATFORM_ENUM_VALUES =
  (typeof SOCIAL_MEDIA_PLATFORM_ENUM)[keyof typeof SOCIAL_MEDIA_PLATFORM_ENUM];

export type SOCIAL_MEDIA_ICON_LOOKUP = {
  [key in SOCIAL_MEDIA_PLATFORM_ENUM_VALUES]: {
    standard: string;
    hover: string;
  };
};
