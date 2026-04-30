type RecaptchaResult = {
  success: boolean;
  score: number;
  action?: string;
};
export const verifyRecaptcha = async (
  token: string,
): Promise<RecaptchaResult> => {
  const verifyURL = "https://www.google.com/recaptcha/api/siteverify";
  const RECAPTCHA_KEY_SECRET = process.env.RECAPTCHA_KEY_SECRET;

  const recaptchaRes = await fetch(verifyURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${RECAPTCHA_KEY_SECRET}&response=${token}`,
  });

  const recaptchaData = await recaptchaRes.json();

  if (!recaptchaData.success || recaptchaData.score < 0.5) {
    throw new Error(
      "Fallo la verificacion de seguridad, intentalo nuevamente para verificar que eres humano",
    );
  }
  return {
    success: recaptchaData.success && recaptchaData.score >= 0.5,
    score: recaptchaData.score,
    action: recaptchaData.action,
  };
};
