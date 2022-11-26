import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-indigo-500">
      <Container>
        <div className="py-3 px-7 flex flex-row gap-10 items-center justify-end">
          <p>Copyright © 2022 Bien Sûr. All Rights Reserved.</p>
          <p>
            Site by{" "}
            <a
              href="https://github.com/saniagarciadev"
              className="underline hover:text-success duration-200 transition-colors"
            >
              Sania García
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
