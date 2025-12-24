import os


def rename_album_images(folder_path: str) -> None:
    """Rename .jpg files in an album folder to 1.jpg, 2.jpg, ...

    Notes:
    - Keeps cover.jpg unchanged.
    - Uses a two-pass rename to avoid filename collisions.
    """

    jpg_files = [
        f for f in os.listdir(folder_path)
        if f.lower().endswith('.jpg') and f.lower() != 'cover.jpg'
    ]

    # Sort deterministically (e.g., IMG_001.jpg < IMG_010.jpg)
    jpg_files.sort(key=str.lower)

    # First pass: rename to temporary names
    temp_names: list[tuple[str, str]] = []
    for i, filename in enumerate(jpg_files, start=1):
        old_path = os.path.join(folder_path, filename)
        temp_name = f"__tmp__{i}.jpg"
        temp_path = os.path.join(folder_path, temp_name)
        os.rename(old_path, temp_path)
        temp_names.append((temp_name, f"{i}.jpg"))

    # Second pass: rename temporary names to final names
    for temp_name, final_name in temp_names:
        temp_path = os.path.join(folder_path, temp_name)
        final_path = os.path.join(folder_path, final_name)
        os.rename(temp_path, final_path)


if __name__ == '__main__':
    # Run inside whatever folder this script is placed in (album-2, album-3, etc.)
    folder_path = os.path.dirname(os.path.abspath(__file__))
    rename_album_images(folder_path)
    print(f"Renaming completed in: {folder_path}")
