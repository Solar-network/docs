---
title: Introduction
---

# Client


## Development

1. Fork the [package](https://github.com/solar-network/python-client).
2. Clone your forked repository.

```bash
git clone https://github.com/<githubusername>/python-client
```

<!-- markdownlint-disable MD029 -->
3. Next, move into the fresh cloned directory.
<!-- markdownlint-enable MD029 -->

```bash
cd python-client
```

<!-- markdownlint-disable MD029 -->
4. The next step would be to create something like a [virtual environment](https://virtualenv.pypa.io/en/latest/) to ensure no name clashes occur.
<!-- markdownlint-enable MD029 -->
<!-- markdownlint-disable MD029 -->
5. Create and enter the virtual environment
<!-- markdownlint-enable MD029 -->

```bash
   # With virtualenv (on Unix and OSx)
   mkdir my-amazing-solar-project
   cd my-amazing-solar-project
   virtualenv virtualEnvName
   source venv/bin/activate

   # With virtualenv (on Windows)
   mkdir my-amazing-solar-project
   cd my-amazing-solar-project
   virtualenv virtualEnvName
   .\venv\Scripts\activate.bat
```

<!-- markdownlint-disable MD029 -->
6. Once inside the virtualenv, you can proceed to install dependencies.
<!-- markdownlint-enable MD029 -->

```bash
python -m pip install -e ."[dev]"
```

<!-- markdownlint-disable MD029 -->
7. Dependencies are now installed, you can now run the tests to see if everything is running as it should.
<!-- markdownlint-enable MD029 -->

```bash
pytest
```
