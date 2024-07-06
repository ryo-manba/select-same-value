"use client";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

export default function Home() {
  return (
    <main>
      <h1>Select same value example</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          console.log(Object.fromEntries(formData));
        }}
      >
        <Select name="country">
          <Label>Country</Label>
          <Button>
            <SelectValue />
            <span aria-hidden="true">▼</span>
          </Button>
          <Popover>
            <ListBox>
              <ListBoxItem id="1">USA</ListBoxItem>
              <ListBoxItem id="81">Japan</ListBoxItem>
              {/* Italy is not displayed because its ID is duplicated with Vatican */}
              <ListBoxItem id="39">Italy</ListBoxItem>
              <ListBoxItem id="39">Vatican</ListBoxItem>
              <ListBoxItem id="61">Australia</ListBoxItem>
              <ListBoxItem id="44">United Kingdom</ListBoxItem>
            </ListBox>
          </Popover>
        </Select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
