
# Solar Network Documentation

<p align="center">
  <img src="./banner.png" />
  <strong>
    <a href="https://docs.solar.org/">https://docs.solar.org</a>
  </strong>
</p>

> Solar Network Documentation made with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/)

## Requirements

- Python >= 3.6

> Some Debian/Ubuntu systems may need to install `python3-venv`:<br />
> e.g., `apt install python3.10-venv`

## Installation

Solar Network documentation development utilises [Python venv](https://docs.python.org/3/library/venv.html):

### 1: Create the Python Virtual Environment and install dependencies

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

<details><summary>Later on, you can exit the virtual environment using the '<code>deactivate</code>' command.</summary>

```bash
deactivate
```

</details><br />


<!-- > Later on, you can exit the Python Virtual Environment using the '`deactivate`' command.
>
> ```bash
> deactivate
> ``` -->

### 2: Serve locally

```shell
mkdocs serve
```

> Then visit: `http://127.0.0.1:8000`

### 3: Deploy to GH Pages

<details><summary>(admins-only)</summary>

``` sh
mkdocs build
mkdocs gh-deploy --force
```

</details><br />

<!-- <details><summary>3: Deploy to GH Pages (admins-only)</summary>

``` sh
mkdocs build
mkdocs gh-deploy --force
```

</details> -->

## Security

If you discover a security vulnerability within any of these packages, please send an e-mail to security@solar.org. All security vulnerabilities will be promptly addressed.

## Credits

This project exists thanks to all the people who [contribute](../../contributors).

## License

Please read the separate [LICENSE](LICENSE) file for details.