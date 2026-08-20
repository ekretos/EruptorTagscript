# 👤 User & Member Placeholders

> **Access author details, avatar URLs, member roles, nicknames, and role colors.**

---

## 📌 User Placeholders (`{user}`, `{author}`)

---

### `{user.username}`
- **Type:** `string`
- **Description:** Account username of the member who ran the tag.
- **Example Output:** `errordoc404`

---

### `{user.id}`
- **Type:** `string` (Snowflake)
- **Description:** Unique Discord User ID.
- **Example Output:** `456130838183280651`

---

### `{user.mention}`
- **Type:** `string`
- **Description:** Formatted clickable Discord user mention.
- **Example Output:** `<@456130838183280651>`

---

### `{user.avatar}`
- **Type:** `string` (Image URL)
- **Description:** Direct URL to the user's Discord avatar.
- **Usage:**
  ```tagscript
  {embed(thumbnail):{user.avatar}}
  ```

---

## 📌 Guild Member Placeholders (`{member}`, `{target}`)

---

### `{member.displayName}` / `{member.nickname}`
- **Type:** `string`
- **Description:** Server-specific display name or nickname.
- **Example Output:** `Bhaukal 👑`

---

### `{member.color}`
- **Type:** `string` (Hex)
- **Description:** Hex color code of the member's highest role.
- **Example Output:** `#5865F2`
- **Usage:**
  ```tagscript
  {embed(color):{member.color}}
  ```

---

### `{member.roles}`
- **Type:** `string`
- **Description:** Comma-separated list of role names assigned to this member.
- **Example Output:** `Admin, DJ, VIP`

---

## 💻 Full Interactive Example: User Profile Tag

```tagscript
{cooldown(5)}
{embed(title):👤 Member Profile: {member.displayName}}
{embed(thumbnail):{user.avatar}}
{embed(field):Username~{user.username}~true}
{embed(field):User ID~{user.id}~true}
{embed(field):Roles~{member.roles}~false}
{embed(color):{member.color}}
{embed(footer.text):Requested by {user.username}}
```
