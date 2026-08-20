---
title: User & Member Context
description: Reference for {user}, {author}, {member}, and {target} transformers in Eruptor.
---

## The User Transformer (`{user}`, `{author}`)

Provides user information for the message sender.

### Attributes Table

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{user}` / `{user.mention}` | `string` | Formatted mention string | `<@456130838183280651>` |
| `{user.id}` | `string` | Discord Snowflake User ID | `456130838183280651` |
| `{user.username}` | `string` | User's Discord account username | `errordoc404` |
| `{user.tag}` | `string` | Username with legacy discriminator or tag | `errordoc404#0` |
| `{user.avatar}` | `string` | User's avatar image URL | `https://cdn.discordapp.com/...` |
| `{user.displayAvatar}` | `string` | Display avatar (server or global) | `https://cdn.discordapp.com/...` |
| `{user.bot}` | `boolean` | `true` if the account is a Discord bot | `false` |
| `{user.createdAt}` | `string` | ISO 8601 account creation date | `2018-06-15T12:00:00.000Z` |

---

## The Member Transformer (`{member}`, `{target}`)

Provides guild-specific member properties (roles, permissions, nicknames, and role colors).

### Attributes Table

| Property | Type | Description | Raw Example |
| :--- | :--- | :--- | :--- |
| `{member.displayName}` | `string` | Nickname or global display name | `Bhaukal 👑` |
| `{member.nickname}` | `string` | Server-specific nickname | `Bhaukal 👑` |
| `{member.color}` | `string` | Hex string of highest colored role | `#5865F2` |
| `{member.roles}` | `string` | Comma-separated list of role names | `Admin, DJ, VIP` |
| `{member.joinedTimestamp}` | `number` | Server join timestamp in ms | `1672531199000` |
| `{member.premiumSince}` | `string` | Server boosting date or empty string | `2023-01-01` |

---

## Example Usage

### User Profile Card
```tagscript
{embed(title):👤 Member Profile: {user.username}}
{embed(thumbnail):{user.avatar}}
{embed(field):Account ID~{user.id}~true}
{embed(field):Nickname~{member.displayName}~true}
{embed(field):Roles~{member.roles}~false}
{embed(color):{member.color}}
```
