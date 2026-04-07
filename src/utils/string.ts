import { formatIncompletePhoneNumber } from "@/lib/libphonenumber"

export function decodeEmail(email: string) {
  if (!email) {
    return ""
  }
  return atob(email)
}

export function decodePhoneNumber(phone: string) {
  if (!phone) {
    return ""
  }
  return atob(phone)
}

export function formatPhoneNumber(phone: string) {
  return formatIncompletePhoneNumber(phone)
}
