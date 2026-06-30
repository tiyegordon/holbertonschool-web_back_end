#!/usr/bin/env python3
"""
Simple helper function for pagination
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Return a tuple of start and end index for a given page and page_size.

    Args:
        page (int): the page number (1-indexed)
        page_size (int): the number of items per page

    Returns:
        tuple: (start_index, end_index)
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size

    return (start_index, end_index)
