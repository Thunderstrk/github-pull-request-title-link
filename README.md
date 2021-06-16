# GitHub Pull Request Title Link

Changes pull requests titles that reference a JIRA ticket to a link.

## Installation on Chrome

1. Clone or fork the repo
2. Edit github-title-link.js and replace "issues.liferay.com" with your JIRA domain.
3. Go to [chrome://extensions/](chrome://extensions/)
4. Check the "Developer Mode" box
5. Click "Load Unpacked Extension"
6. Select repo folder

## Installation on Firefox Developers

1. Clone or fork the repo
2. Edit the domain for our JIRA
3. Install web-ext (npm install --global web-ext)
4. web-ext build at the root of the project
5. Enable unsigned extesion on Firefox Dev (about:config then set xpinstall.signatures.required to false)
6. Go to extensions page on Firefox Dev settings
7. Drag and Drop the built extension zip
