---
description: Homebrew 설치 및 사용법 알아보기.  
createdAt: 2022-01-24  
updatedAt: 2022-01-24
---

> Homebrew는 MacOS용 패키지 관리 앱입니다. Homebrew를 사용하면 보다 쉽게 개발환경을 셋팅할 수 있습니다.  
> 기본적으로는 커맨드라인과 시스템 패키지들을 설치하는데 사용되나, Cask 확장을 통해 GUI 설치에도 사용할 수 있습니다.
>
> MacOS용이지만 Linux 및 Windows의 WSL도 지원하고있습니다.

## Homebrew 설치 (M1)

Homebrew는 [공식사이트](https://brew.sh/index_ko) 에 접속하여 다운로드 받을수 있습니다.

- 아래 스크립트를 터미널에 복사하여 줍니다.

```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- 설치가 완료 되면 안내 메세지가 나옵니다.

```zsh
==> Next steps:
- Add Homebrew to your PATH in /Users/<USER_ID>/.zprofile:
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/<USER_ID>/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
- Run `brew help` to get started
- Further documentation:
    https://docs.brew.sh
```

- 안내에 따라 두 줄을 복사하여 실행합니다.

```zsh
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/<USER_ID>/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)" 
```

- 설치가 제대로 되었는지 확인합니다.

```zsh
which brew
```

`/opt/homebrew/bin/brew` 경로가 나온다면 정상적으로 설치가 된 것입니다.

---

## 참고 사이트

- [홈브류(Homebrew)란?](https://www.44bits.io/ko/keyword/homebrew)
- [애플 실리콘 M1 용 Homebrew 설치](https://www.lainyzine.com/ko/article/how-to-install-homebrew-for-m1-apple-silicon/)