import Image from "next/image"
const techIcons = [
  {
    name: "JavaScript",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
        <path fill="#F7DF1E" d="M100 0H0v100h100z" />
        <path
          fill="#000"
          d="M67.175 78.125c2.014 3.29 4.634 5.707 9.27 5.707 3.893 0 6.38-1.946 6.38-4.635 0-3.222-2.555-4.364-6.84-6.238l-2.35-1.008c-6.781-2.89-11.286-6.508-11.286-14.159 0-7.047 5.37-12.413 13.762-12.413 5.975 0 10.27 2.08 13.365 7.524l-7.317 4.699c-1.612-2.89-3.35-4.027-6.048-4.027-2.752 0-4.497 1.746-4.497 4.027 0 2.819 1.746 3.96 5.778 5.706l2.35 1.006c7.983 3.424 12.491 6.915 12.491 14.762 0 8.46-6.646 13.096-15.571 13.096-8.727 0-14.365-4.16-17.124-9.61zm-33.196.815c1.477 2.619 2.82 4.833 6.048 4.833 3.087 0 5.035-1.208 5.035-5.905V45.916h9.397v32.08c0 9.73-5.705 14.158-14.032 14.158-7.524 0-11.881-3.894-14.097-8.583z"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
        <path fill="#017ACB" d="M0 0h100v100H0z" />
        <path
          fill="#fff"
          d="M48.016 37.031h4.797v8.282h-12.97v36.843l-.343.094c-.469.125-6.64.125-7.969-.016l-1.062-.093V45.312H17.5v-8.28l4.11-.048c2.25-.03 8.03-.03 12.843 0 4.813.032 10.906.047 13.563.047m36.61 41.219c-1.907 2.016-3.954 3.14-7.36 4.063-1.485.406-1.735.421-5.078.406-3.344-.016-3.61-.016-5.235-.438-4.203-1.078-7.594-3.187-9.906-6.172-.656-.843-1.734-2.593-1.734-2.812 0-.063.156-.203.359-.297s.625-.36.969-.562c.343-.204.968-.579 1.39-.797.422-.22 1.64-.938 2.703-1.579 1.063-.64 2.032-1.156 2.141-1.156.11 0 .313.219.469.485.937 1.578 3.125 3.593 4.672 4.28.953.407 3.062.86 4.078.86.937 0 2.656-.406 3.578-.828.984-.453 1.484-.906 2.078-1.812.406-.641.453-.813.438-2.032 0-1.125-.063-1.437-.375-1.953-.875-1.437-2.063-2.187-6.875-4.312-4.97-2.203-7.204-3.516-9.016-5.282-1.344-1.312-1.61-1.67-2.453-3.312-1.094-2.11-1.235-2.797-1.25-5.937-.016-2.204.031-2.922.265-3.672.329-1.125 1.391-3.297 1.875-3.844 1-1.172 1.36-1.531 2.063-2.11 2.125-1.75 5.438-2.906 8.61-3.015.359 0 1.546.062 2.656.14 3.187.266 5.359 1.047 7.453 2.72 1.578 1.25 3.968 4.187 3.734 4.577-.156.235-6.39 4.391-6.797 4.516-.25.078-.422-.016-.765-.422-2.125-2.547-2.985-3.094-5.047-3.219-1.469-.093-2.25.078-3.235.735-1.03.687-1.53 1.734-1.53 3.187.015 2.125.827 3.125 3.827 4.61 1.938.953 3.594 1.734 3.719 1.734.188 0 4.203 2 5.25 2.625 4.875 2.86 6.86 5.797 7.375 10.86.375 3.812-.703 7.296-3.047 9.765"
        />
      </svg>
    ),
  },
  {
    name: "HTML5",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
        <path
          fill="#E44D26"
          d="M14.021 90.034 6 0h88.187l-8.022 89.985L50.02 100"
        />
        <path fill="#F16529" d="M50.093 92.344V7.39h36.048l-6.88 76.811" />
        <path
          fill="#EBEBEB"
          d="M22.383 18.4h27.71v11.036H34.488L35.51 40.74h14.584v11.01H25.397zm3.5 38.893h11.084l.778 8.823 12.348 3.306v11.521l-22.654-6.32"
        />
        <path
          fill="#fff"
          d="M77.706 18.4H50.044v11.036h26.64zm-2.018 22.34H50.044v11.035h13.612l-1.288 14.341-12.324 3.306v11.473l22.606-6.271"
        />
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
        <path
          fill="#264DE4"
          d="m94.175 0-8.033 89.99L50.034 100l-36.01-9.996L6 0z"
        />
        <path fill="#2965F1" d="m79.265 84.26 6.864-76.9H50.087v84.988z" />
        <path
          fill="#EBEBEB"
          d="m24.396 40.74.99 11.039h24.702V40.74zm25.692-22.342h-27.68l1.003 11.038h26.676zm-.001 62.495V69.408l-.048.013-12.294-3.32-.786-8.803H25.878l1.547 17.332 22.612 6.277z"
        />
        <path
          fill="#fff"
          d="m63.642 51.779-1.281 14.316-12.312 3.323v11.484l22.63-6.272.166-1.865 2.594-29.06.27-2.965L77.7 18.398H50.05v11.038h15.555L64.599 40.74H50.05v11.04z"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
        <path
          fill="#06B6D4"
          d="M50 20q-20 0-25 19.994 7.5-9.997 17.5-7.498c3.804.95 6.522 3.71 9.532 6.764 4.902 4.974 10.576 10.731 22.969 10.731q20 0 24.999-19.995-7.5 9.997-17.5 7.5c-3.803-.951-6.521-3.71-9.531-6.765C68.067 25.758 62.392 20 50 20M25 49.991q-20 0-25 19.995 7.5-9.998 17.5-7.498c3.803.952 6.522 3.71 9.532 6.763C31.933 74.225 37.608 79.984 50 79.984q20 0 25-19.995-7.5 9.997-17.5 7.498c-3.803-.95-6.522-3.71-9.532-6.763C43.066 55.75 37.393 49.991 25 49.991"
        />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 101 100">
        <path
          fill="#61DAFB"
          d="M50.307 58.816a8.816 8.816 0 1 0 0-17.632 8.816 8.816 0 0 0 0 17.632"
        />
        <path
          stroke="#61DAFB"
          strokeWidth="5"
          d="M50.307 68.063c26.126 0 47.306-8.087 47.306-18.063s-21.18-18.062-47.306-18.062C24.18 31.938 3 40.024 3 50s21.18 18.063 47.307 18.063Z"
        />
        <path
          stroke="#61DAFB"
          strokeWidth="5"
          d="M34.664 59.031C47.727 81.658 65.321 95.957 73.96 90.97c8.64-4.988 5.053-27.374-8.01-50C52.885 18.342 35.291 4.043 26.652 9.03s-5.052 27.374 8.011 50Z"
        />
        <path
          stroke="#61DAFB"
          strokeWidth="5"
          d="M34.664 40.969c-13.063 22.626-16.65 45.012-8.01 50 8.638 4.988 26.232-9.311 39.295-31.938s16.65-45.012 8.01-50c-8.638-4.988-26.232 9.311-39.295 31.938Z"
        />
      </svg>
    ),
  },
  {
    name: "vite",
    icon: <Image width={40} height={40} src="techIcons/vite.svg" alt="vite" />,
  },
  {
    name: "Next.js",
    icon: (
      <svg
        className="dark:invert"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
      >
        <g fill="#000" clipPath="url(#a)">
          <path d="M66.477 40.008h17.418v3.215h-6.91v16.914H73.53V43.223h-7.053zm-28.647 0v3.215H23.87v5.172h11.228v3.215H23.869v5.312H37.83v3.215H20.414V43.223h-.002v-3.215zm8.698.009h-4.521L58.2 60.145h4.535l-8.099-10.057 8.086-10.056-4.522.007-5.827 7.238zm4.64 14.378-2.265-2.816-6.91 8.581h4.535z" />
          <path
            fillRule="evenodd"
            d="M20.535 60.137 4.319 40H0v20.128h3.455V44.302l12.74 15.835z"
            clipRule="evenodd"
          />
          <path d="M84.672 60.014a.9.9 0 0 1-.649-.263.85.85 0 0 1-.267-.639.84.84 0 0 1 .267-.63.9.9 0 0 1 .649-.263q.365 0 .636.263a.854.854 0 0 1 .148 1.084.93.93 0 0 1-.335.326.86.86 0 0 1-.45.122m5.898-8.48h1.53v5.899q-.004.812-.348 1.395-.347.584-.965.898-.616.312-1.435.313-.746-.001-1.343-.265a2.16 2.16 0 0 1-.946-.784q-.35-.52-.349-1.294h1.534q.004.34.151.586a1 1 0 0 0 .408.376q.263.13.604.131.37.001.627-.154a1 1 0 0 0 .393-.457q.135-.301.138-.745zm7.83 2.307a1.11 1.11 0 0 0-.487-.835q-.432-.3-1.117-.3-.481.001-.826.143-.345.145-.53.39a.95.95 0 0 0-.186.56q0 .264.124.455.122.195.334.325.211.135.469.224.26.09.52.152l.797.196q.483.11.93.3.447.188.803.475.354.287.562.692t.208.95q.001.738-.382 1.297-.381.557-1.105.872-.719.313-1.744.314c-.66 0-1.236-.102-1.72-.305a2.54 2.54 0 0 1-1.14-.883q-.41-.582-.443-1.416h1.518c.02.29.114.532.273.728q.243.29.63.434.39.143.87.143.503 0 .886-.15.379-.148.594-.417a.98.98 0 0 0 .22-.628.8.8 0 0 0-.194-.544 1.5 1.5 0 0 0-.534-.36 5.5 5.5 0 0 0-.8-.26l-.97-.245q-1.05-.267-1.66-.81-.608-.542-.608-1.444 0-.74.41-1.298.408-.558 1.114-.865.71-.311 1.601-.31.905-.001 1.59.31.685.307 1.074.855.391.547.403 1.255z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 40h100v20.305H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "Prisma orm",
    icon: (
      <Image
        width={40}
        height={40}
        className="dark:invert"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWElEQVR4nNWaW4hNURjHfzOMa0wYRPJiPJjw4BoRL9MYHtCYCE2ivIxQbilNGA+jeXJ/QbmXhOSWFOWSxohSFIbcZ3KbMnKZMUdL36nV6ezL2mvvc/b519c0Z6/v2/u397p869sbotUG4BPwDagF8shBLQISKbaCHFN/oDkNyGuggBzSoTQQSasiRzQD6HQBeQrkE3N1B564QCStgpir1uHCdwLbtP8fEGONBn47gIyQQf5K+20WMVQ+cNsB4rO2flRrv98lhqp2GQ+XUsbQe+3YdGKkIbJyO4HUpLRfrx27Qox01mOGKktp31vSluTxCcRAczwg1HoyII1fjdbmDFlWX+CtB8gzB99CoFWDVTNe1rTXx8J3zMW/Tmt3hCxpEtDhA2SVS4xBwA9pp2IVk2F1BR76gEgIsJt2a233k2Ft8QnxS9YNNw3TsgHVfmiGGBgJ/PQJcs9nzIOaTz0ZkEozrvuEULbLZ1yVh7WLTxtQFDEHyw0glC0xiH1S89saIcP/u6Svxn7MZBYqAf6KX6usM5HohCHElwAVk/Oa/8YoIMoMIZRdDnCecdoWWRUueoYJ0QtoCgAStJ9f02KorUFoqg8AoazconCREHsDdAsDYizwJwBEp+UUekuLtcwWogvQGPBpPLc8d3lKLHUtgbUuIISy49jrvhavMmiQ4cB3C5DVIYBUaPEeBS1+X7CAUDY5BJA84LEWc7ZpgPmWECqT7UE4WqrFvWPqfMASpIFw9z1NWuyZJs7zLEH2EK5WarHVYmmk0xYgqjuEqQJ5p5KMP8XEucjhJY0fUxuvsLVWi3/O1HluAIggGa/ffK/FpnR0yhDkKtFph3aew6bOqkL40QBkezQMFEqXskqBTLqYKp+GoTzZm2wGbqZJXAM/+aM+QQZaXLyaYBZLxdFtolHryqigJ+kHvPOAUCcwkcpop0p3bND264k09hLYJ0/cen9S6vGmVu3pvTRYMln1hL+6xGqXt1+bgPFEIL2QlmprHFKMaVKsbvS4Ec0CWBllBSWpwpRVNpEmOy2WwvVFKba53fUbUi0ZQxZU6nBn1Rh64TGOPsgXEQsycdfDzJA7pEvVSReL3ZdBfWQmSXfxLTKFLpQPa2KvEqm2t8lf9U5wYi58Y0Lc9Q9kS6Hd6ilkXwAAAABJRU5ErkJggg=="
        alt="prisma-orm"
      ></Image>
    ),
  },
  {
    name: "Drizzle orm",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        fill={"currentColor"}
        viewBox="0 0 24 24"
      >
        {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
        <path d="M6.13 10.67c.42.24.57.77.33 1.19l-2.82 4.92c-.24.42-.78.57-1.2.33a.87.87 0 0 1-.33-1.19L4.93 11c.24-.42.78-.57 1.2-.33M12.21 6.9c.42.24.57.77.33 1.19l-2.82 4.92c-.24.42-.78.57-1.2.33a.87.87 0 0 1-.33-1.19l2.82-4.92c.24-.42.78-.57 1.2-.33M21.56 6.9c.42.24.57.77.33 1.19l-2.82 4.92c-.24.42-.78.57-1.2.33a.87.87 0 0 1-.33-1.19l2.82-4.92c.24-.42.78-.57 1.2-.33M15.48 10.67c.42.24.57.77.33 1.19l-2.82 4.92c-.24.42-.78.57-1.2.33a.87.87 0 0 1-.33-1.19L14.28 11c.24-.42.78-.57 1.2-.33"></path>
      </svg>
    ),
  },
  {
    name: "Prettier",
    icon: (
      <svg
        role="img"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Prettier icon</title>
        <path d="M8.571 23.429A.571.571 0 0 1 8 24H2.286a.571.571 0 0 1 0-1.143H8c.316 0 .571.256.571.572zM8 20.57H6.857a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zm-5.714 1.143H4.57a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM8 18.286H2.286a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zM16 16H5.714a.571.571 0 0 0 0 1.143H16A.571.571 0 0 0 16 16zM2.286 17.143h1.143a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm17.143-3.429H16a.571.571 0 0 0 0 1.143h3.429a.571.571 0 0 0 0-1.143zM9.143 14.857h4.571a.571.571 0 0 0 0-1.143H9.143a.571.571 0 0 0 0 1.143zm-6.857 0h4.571a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM20.57 11.43H11.43a.571.571 0 0 0 0 1.142h9.142a.571.571 0 0 0 0-1.142zM9.714 12a.571.571 0 0 0-.571-.571H5.714a.571.571 0 0 0 0 1.142h3.429A.571.571 0 0 0 9.714 12zm-7.428.571h1.143a.571.571 0 0 0 0-1.142H2.286a.571.571 0 0 0 0 1.142zm19.428-3.428H16a.571.571 0 0 0 0 1.143h5.714a.571.571 0 0 0 0-1.143zM2.286 10.286H8a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm13.143-2.857c0 .315.255.571.571.571h5.714a.571.571 0 0 0 0-1.143H16a.571.571 0 0 0-.571.572zm-8.572-.572a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143H6.857zM2.286 8H4.57a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm16.571-2.857c0 .315.256.571.572.571h1.142a.571.571 0 0 0 0-1.143H19.43a.571.571 0 0 0-.572.572zm-1.143 0a.571.571 0 0 0-.571-.572H12.57a.571.571 0 0 0 0 1.143h4.572a.571.571 0 0 0 .571-.571zm-15.428.571h8a.571.571 0 0 0 0-1.143h-8a.571.571 0 0 0 0 1.143zm5.143-2.857c0 .316.255.572.571.572h11.429a.571.571 0 0 0 0-1.143H8a.571.571 0 0 0-.571.571zm-5.143.572h3.428a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm0-2.286H16A.571.571 0 0 0 16 0H2.286a.571.571 0 0 0 0 1.143z" />
      </svg>
    ),
  },
  {
    name: "Eslint",
    icon: (
      <Image
        width={40}
        height={40}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFOUlEQVR4nO2ab2gbZRzHn5U5xhyoA53gf/Af290lz6VjomDI5ZKu97QMlSoiFkQUwRdNQ5Zu+uKJk72ZMJzvZK+soNKsaZM0dZuytPdU+6bMsc2uG9XVbsKqrF3STteW5uRJW9c2d8/dpUlJYV943t3z8P3kee73/H6/CwB3tc7kdqc3+4T4U1YH4skDVofbnd5YVvN+Z3dI4qI5D9emWR1IJNYHVG/UQdVbFvO+6iTnsWneNoBIIcjN+t3920sOIPOdl+yaLwpAzEMcK6l5D9/1poeLamsFoIjqXC3sqy6Rfa1K4mI3izEv8fEzCJKjiqhOFwHSWxL7PqHrc7vGvXzHDa+Qqltcox7+/DSCpM02hIs0rMq8/4UT2yTu+KzlX5xrn/Y7E9hovVqxV0KQnLN8lCAZrXMNbCkaQBYSp60Zj+ZkIdndsCO91WxNGuuRSN5HIvnLGoT6cVHm/fxJl5UX18vHB/2uE8/bXT9/eUFyFEEyawJwa29172O2Abxc5xXmry50jPuF1GusNcLhkRcPHpxysJ6pqe57ToFqyiQqfWXLvN+Reo9xzmf8QvIIa/6BA5cfDIWGewKB8xrGmRzGmTaMxx9nzUFOIiOR/KoPoeYUl7rbknkM0hs9XGyq0HxU8/HxHrej437j2VpVOPz7kUBgcLap6bxGRySSXRy3MM5EMNY2G812uQbuQSJporexTprRD4C2wRTAJySP6YTFvyUYF1jzWlr+aAwGL2UXjesALIzMVYwzjSwzyq70w0gk3xfuRN9bTPP13I/bJS46p/OifmZs/BoMhYYHVxo3BpgfGGd6WO+HAsmrOsfpqk84ea8hgJfr7Nc797KQOrzyWYzHtu7b91usqelCzsg8C2BhN+YwzrYeOjRZkLwhkbxikCd9omt+j/OU28Prh009gFDo8ijLuDWA7MJuZIesAihQ/afGkX6yAEDiO/40ijx6AMHg0ESpACKR7ITlHZgPq98te9jn6GpmxfxKA0D5neh9Of9gQ0PbJolr/3e9ASBIzmCgVQGZT3xrli5UJIBItDqovgOsZJuVCoAgOQes1LmVCqCI6jXgFeID6xUAQXIYIEfyEQ93fG79AahjsuuH+/IPy0Ly6/UGoDjJu8syUEk3A61QALgQQpdKFlIf2AEIhYbPlg4g02vrJl68xFbKy8dHrQJQhcNXPm1uvjizCoCJSCTbgrG2yQbAN7rm8wA7u3fp1cFGAEuz0kBAPytlZaEYTz5ktK4eAE3kFPjTE4AlWnUVAiTSzEmMuqAw88ycNquTqRRRxTpx37BlY9oLos2qGr5rr9n8/ftH3g4GhzIrATDOjM5XYmwhZ88zek0w2iNiFjNLJfPJL/Rf6Gi+jVIrpJ5lr3CnNsY4O2VWC1PRnhKCJIJEclv/1iWvAzvycrEJ47shmpP5RIxmsqw1MB7dhvEEowkAAA2HyEkaFaheZ4TNPksF/TKAnak3zFIMiW+/LfPJj0CRqnOqbiSqv5StU+0V4hfNIPIvOd9xnZakVtfdw6cfRSJppf0e03xHJF+CYkVbhh6uzfJXGZmPn6W5ldF6tFFLzzkNhxaMawiqGdpiAauRT0jErQLkjxUXnaO5FU1P7qyibaCtciSqI5aMi/8XLEGwWrlciS0S3z5tB2I+7MYmfXzqw1qX+hLtqtkxjuZ//aGGHReYQcKyfI5k2C7A4rBtXFwYrj4FlFJernNszQCgegqUWn5Hl2dNAKA6Q1vuoBzy8fFWu9+KbQKM0683oJyi0aVcfzXAK4uUuwKVr/8AjImJ/IIN8AkAAAAASUVORK5CYII="
        alt="external-eslint-pluggable-and-configurable-linter-tool-for-identifying-and-reporting-on-patterns-in-javascript-logo-shadow-tal-revivo"
      />
    ),
  },
  {
    name: "Redux Toolkit",
    icon: (
      <Image
        width={40}
        height={40}
        className="dark:invert"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAExklEQVR4nO2aa4hVVRTHf86MStpDjXJ6SA8GpxCbzIzSLEMrQW1EED9UBBZhRdBDnDBLKCN6SBZDQUT2GsRwMiuNUISmEslEP5Q1o71Tmyw1S80pu7Hgf4bt7bzvOccp/MP+cPdj7XX2Xnvt/1r7wjH8v1ENNAKvAV8CB4CDwDbgVWAKUEUPx1XAZ0AponwKXEwPRC/gIeBvKdoO3A0MA44DBgIjgfuB79SnC5hDD8NTUu6wlK0J6WttDwN/acwCeghuk0L7gEkJxl2rs1PS7h1VjAH+1E7YIU6KRo23chFH0Ttt0oo+WIGcBZKxKcIkc8OtUmBLhQr0lRczWbdTMEzx7Zp8cgbyGiVra9F3zCRNvCEjeVXaWZM5lQLRqknvzFDmHZK5nILQHzikC+2UDOWeoQt1H9CHAnCFVu7DHGR/LNlGdXLHHE22KKB9BLAK+E2ruxK4MKZsk2myH6DA83G9T9t5wH4fkmh1w2PInqn+r1AAvO03EliON9S2FBisslR1b8aQfT7QCayjAGyTYuf4tP2ktlqn7jSHUP6oGGUjsAy4D7ga6Fd2QTYW8B38IsUGhHyIKV/+IWHld6BFl2tvCkKXJq+JMK1aFc+03gKGAOcCo4AbRf/XO3GMFduxm8TlcsXPmnCQT1u9VtdvxcMO+1lAE/CFM+ZzYGKO30GHJqoLaDdX+45cr5W3gYaYsm0XbhDnKmmnmsvOUEWodw73ek1yCfmhBpgN/OHsThz3HYrRMqfp+u3ZvNlx3hgObNZ8u4HL0gqaqHROSfEHCkvt97MUg77O4tlZm5BUwAjRDBPwnBMnXKo6uwuyQBxKUyUdSorzY5v1mU7g1Kx0j7tC+5UFsX6VIIzS1Pv0b1a7pZROjRJuSq/WgPcC/PnLap9b4YeEUZrWACewRu1ro+6aW9TxWyXWwqh8e9luJUUYpekMGGP319fqY7r6wmjHHnUKS+/0ci4v8/tpEUZpOkPGXac+O4Hj/To0qcOKGEpMU98fFDWmQRilaY0Y+676zS9v6OMc8Lj+2rPXLc5NniSQCqM09RFjRzkH/wjzHq8GizfiYnIAmw3yOn5ocPibmbVZwwUxx3r5sLFu5WOqnJfgQ5Yl9Dp+uFL9t6fgVE0a+7RbuS6hWRl2pfA65RfdRvWfRXKM19gjIsqvVGmrmrfXKU9kdKQMqE53vFc3flVl74K8zgSxgy4R0zSo1lzGB7uxQ5WRV38GXmeoc8DvJT0GSIaF3934QJX25pEESQOpBiUhvF2rhBmMlpxP/AjZQvLDGIc5LM8gNfqIZD3jx59sy08kW1TrbdFLXCzJ4FHnJMfZ/MuK2tRg7+FZoU55Yi+39WhGGZIWyWwLmtQLphZV+OhSq4vqkEMlxlE5qmRKJelaF8YsvdfW9xPwJm8SowuLncSBPXS+4IQEJ4sRvC6KU5MwmmxzIsXIB9hxjju2lMxHwF2yxVod0n66PC30vRl4SUy45JhRi1ytiyf1cSXn4lyiXMDlSuAN0jk9G7gGuEc6eGN2iNrEggl6AtgbI+Xplg49C5gSQRii19z2hLL3Ao8DJ5AC9heMGcDzejPcqW01+/xGbHmxsixpck/D9IT3onjX97pQD2quDZp7hnQ5Bv4r+Ad+XcNMPi5OxAAAAABJRU5ErkJggg=="
        alt="redux"
      />
    ),
  },
  {
    name: "Shadcn UI",
    icon: (
      <svg
        width="40"
        height="40"
        className="dark:invert"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_790_3387)">
          <path
            d="M81.25 49.9996L50 81.2496"
            stroke="black"
            strokeWidth="6.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M75 15.6246L15.625 74.9996"
            stroke="black"
            strokeWidth="6.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_790_3387">
            <rect
              width="100"
              height="100"
              fill="white"
              transform="translate(0 -0.000366211)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "TanStack Query",
    icon: (
      <Image
        width={40}
        height={40}
        src="techIcons/tanstack-query.svg"
        alt="TanStack Query"
      />
    ),
  },
  {
    name: "SWR",
    icon: (
      <Image
        width={40}
        height={40}
        className="dark:invert "
        src="techIcons/swr.svg"
        alt="SWR"
      />
    ),
  },
]

export default function TechStackIcons() {
  return (
    <section className=" text-2xl md:text-3xl font-semibold text-center mb-4 ">
      <h2 className="mb-4">Tech stack</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-center w-15 h-15 bg-gray-50/70 dark:bg-neutral-900 rounded-xl shadow-md hover:shadow-lg hover:scale-110"
          >
            <div className="w-10 h-10 flex">{tech.icon}</div>

            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 dark:bg-gray-100 text-white dark:text-slate-900 text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {tech.name}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900 dark:border-t-slate-100"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
